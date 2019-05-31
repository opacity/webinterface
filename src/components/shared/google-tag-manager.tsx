import React, { useEffect } from "react";
import gtmParts from "react-google-tag-manager";

interface IProps {
  gtmId: string;
  dataLayerName?: string;
  additionalEvents?: any;
  previewVariables?: string;
  scriptId?: string;
  scheme?: string;
}

const GoogleTagManager = (props: IProps) => {
  useEffect(() => {
    const dataLayerName = props.dataLayerName || "dataLayer";
    const scriptId = props.scriptId || "react-google-tag-manager-gtm";

    if (!window[dataLayerName]) {
      const script = document.createElement("script");
      const gtmScriptNode = document.getElementById(scriptId);

      if (gtmScriptNode) {
        const scriptText = document.createTextNode(
          gtmScriptNode.textContent || ""
        );

        script.appendChild(scriptText);
        document.head.appendChild(script);
      }
    }
  }, []);

  const gtm = gtmParts({
    id: props.gtmId,
    dataLayerName: props.dataLayerName || "dataLayer",
    additionalEvents: props.additionalEvents || {},
    previewVariables: props.previewVariables || false,
    scheme: props.scheme || "https:"
  });

  return (
    <div>
      <div>{gtm.noScriptAsReact()}</div>
      <div id={props.scriptId || "react-google-tag-manager-gtm"}>
        {gtm.scriptAsReact()}
      </div>
    </div>
  );
};

export default GoogleTagManager;
