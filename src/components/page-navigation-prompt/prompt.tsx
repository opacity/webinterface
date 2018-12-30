// https://github.com/ReactTraining/react-router/issues/5405#issuecomment-430911738
import * as React from "react"
import {withRouter} from "react-router"

// Explanation: This component is meant to prevent accidental page transitions
// which could cause unsaved work to be lost. When this component is mounted
// and the `when` prop is true, it does two things:
//
// 1. Ask for confirmation before allowing page transitions from back/forward
//    browser navigation and react-router Link navigation. This uses the
//    react-router provided history.
// 2. Ask for confirmation before allowing "leave page" browser navigation
//    (close/refresh). This uses the window's beforeunload event.
//
// The first one is what the react-router Prompt component is supposed to do.
// However, it is buggy. See here:
// https://github.com/ReactTraining/react-router/issues/5405

const DEFAULT_MESSAGE =
  "You have unsaved changes, are you sure you want to leave?"

interface Props {
  when: boolean
  message?: string
  history?: any
}

class NavigationLock extends React.PureComponent<Props> {
  public unblock?: () => void

  public componentDidMount() {
    if (this.props.when) {
      this.startBlocking()
    }
  }

  public componentWillUnmount() {
    this.stopBlocking()
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.when && !this.props.when) {
      this.startBlocking()
    } else if (!nextProps.when && this.props.when) {
      this.stopBlocking()
    }
  }

  public render() {
    return null
  }

  private onBeforeUnload = (event: any) => {
    // Prompts the user before closing the page, see:
    // https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
    event.preventDefault()
    event.returnValue = ""
  }

  private startBlocking = () => {
    if (!this.unblock) {
      const message = this.props.message || DEFAULT_MESSAGE
      this.unblock = this.props.history.block(message)
    }
    window.addEventListener("beforeunload", this.onBeforeUnload)
  }

  private stopBlocking = () => {
    if (this.unblock) {
      this.unblock()
      this.unblock = undefined
    }
    window.removeEventListener("beforeunload", this.onBeforeUnload)
  }
}

export default withRouter(NavigationLock)
