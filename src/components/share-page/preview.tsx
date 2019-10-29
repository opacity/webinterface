import React, { useEffect } from "react"
import { PreviewRenderer } from "./preview-renderer"
import ReactMarkdown from "react-markdown"

const getTypeFromExt = (ext?: string) => {
	ext = ("" + ext).replace(/^\./, "")

	if ([
		"png",
		"apng",

		"svg",

		"gif",

		"bmp",

		"ico",
		"cur",

		"jpg",
		"jpeg",
		"jfif",
		"pjpeg",
		"pjp",

		"webp"
	].includes(ext))
		return "image"

	if ([
		"mp4",
		"ogg",
		"webm"
	].includes(ext))
		return "video"

	if ([
		"txt",
		"md"
	].includes(ext))
		return "text"

	return undefined
}

type PreviewProps = {
	ext: string
	type?: string
	url: string
	className?: string
	onLoad?: () => void
	onUnload?: () => void
}

const Preview = ({
	ext,
	type,
	url,
	className,
	onLoad,
	onUnload
}: PreviewProps) => {
	useEffect(() => {
		onLoad && onLoad()

		return () => {
			onUnload && onUnload()
		}
	})

	const newType = "" + (type || getTypeFromExt(ext))

	switch (newType.split("/")[0]) {
		case "image":
			return <img className={className} src={url} />
		case "video":
			return (
				<video
					className={className}
					controls
				>
					<source src={url} type={type} />
					Your browser doesn't support this video type.
				</video>
			)
		case "audio":
			return (
				<audio
					className={className}
					controls
				>
					<source src={url} type={type} />
					Your browser doesn't support this audio type.
				</audio>
			)
		case "text":
			switch (newType.split("/")[1]) {
				case "markdown":
					return (
						<div className={className}>
							<PreviewRenderer
								url={url}
								render={text => <ReactMarkdown source={text} />}
							/>
						</div>
					)
				default:
					return (
						<div className={className}>
							<PreviewRenderer url={url} />
						</div>
					)
			}
		default:
			return <div className={className}>Unsupported file format</div>
	}
}

export { getTypeFromExt, Preview, PreviewProps }
