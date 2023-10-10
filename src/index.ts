import { configuration } from './imagePreviewer.model'

// Main Lib Fun 
export const imagePreviewer = (
    elementId: string,
    configuration: configuration
) => {

    // Getting Element that they wanted to detailed 
    const element = document.getElementById(elementId);

    // creating container to wrap preview elements
    const container = document.createElement("div");
    container.className = `ip-image-container`;
    container.style.height = element?.offsetHeight + 'px'
    container.style.width = element?.offsetWidth + 'px'
    if (element) {
        container.style.position = "relative";
        container.innerHTML = element.outerHTML
        element.parentNode?.replaceChild(container, element)
    };

    configuration.elements.forEach((config, index) => {
        // to set arrow length (height/width) according to user preferences
        const arrowLength = () => {
            if (
                config.arrow?.direction &&
                (config.arrow?.direction === "left" ||
                    config.arrow?.direction === "right")
            ) {
                return "width:" + config.arrow?.length + "px; height:1px;";
            } else {
                if (config.arrow?.length) {
                    return "height:" + config.arrow?.length + "px; width:1px;";
                } else {
                    return "height:" + 200 + "px; width:1px;";
                }
            }
        };
        // style to set the arrow
        const style = `position:absolute; display:block; 
        ${"top:" + (config.position.top ? config.position.top + "%" : "unset")
            }; 
        ${"bottom:" +
            (config.position.bottom ? config.position.bottom + "%" : "unset")
            }; 
        ${"left:" +
            (config.position.left ? config.position.left + "%" : "unset")
            }; 
        ${"right:" +
            (config.position.right ? config.position.right + "%" : "unset")
            }; 
        ${"background-color:" +
            (config.label.background ? config.label.background : "black")
            };
        ${arrowLength()}
        `;

        // getting arrow direction to set position of label
        const arrowDirection = () => {
            if (
                config.arrow?.direction == "left" ||
                config.arrow?.direction == "right"
            ) {
                return config.arrow.direction == "left"
                    ? "left"
                    : config.arrow.direction == "right"
                        ? "right"
                        : "";
            } else if (config.arrow?.direction == ("above" || "below")) {
                return config.arrow?.direction == "above"
                    ? "above"
                    : config.arrow?.direction == "below"
                        ? "below"
                        : "";
            } else {
                return "below";
            }
        };

        // user label style
        const labelStyle = `${"background-color:" +
            (config.label.background ? config.label.background : "black")
            }; 
        ${"color:" + (config.label.textColor ? config.label.textColor : "white")
            };`;

        // final elements
        const html = `<div style="${style}" id="ip-container-${index}" class="ip-arrow ip-mark-${arrowDirection()}">
                           <div style="position:relative; height:100%; width:100%;" id="ip-arrow-${index}">
                                 <p class="ip-label ip-label-${arrowDirection()}" style="${labelStyle}">${config.label.labelName
            }</p>
                            </div>
                      </div>`;

        // finally Adding labels and arrow to the image
        container.insertAdjacentHTML("beforeend", html);
    });

    return imagePreviewer
};
