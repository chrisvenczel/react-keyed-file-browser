import React from 'react'

// See https://allthingssmitty.com/2016/09/12/checking-if-font-awesome-loaded/
const IsFontAwesomeLoaded = (version) => {
  const prefix = version === 4 ? 'fa' : 'fas'
  const fontNames = version === 4
    ? ['FontAwesome', '"FontAwesome"']
    : ['"Font Awesome 5 Free"', '"Font Awesome 5 Pro"']
  let FontAwesomeLoaded = false
  const span = document.createElement('span')

  span.className = prefix
  span.style.display = 'none'
  document.body.insertBefore(span, document.body.firstChild)

  const css = (element, property) => window.getComputedStyle(element, null).getPropertyValue(property)

  if (!fontNames.includes(css(span, 'font-family'))) {
    console.warn(
      `Font Awesome ${version} was not detected but Font Awesome ${version} icons have been requested for \`react-object-list\``
    )
  } else {
    FontAwesomeLoaded = true
  }
  document.body.removeChild(span)
  return FontAwesomeLoaded
}

const icon = (url) => {
  return {
    backgroundImage: `url(${url})`,
    width: "1.3em",
    height: "1.3em",
    backgroundRepeat: "no-repeat",
    transform: "translateY(0.2em)",
    backgroundSize: "contain",
    display: "inline-block",
    filter: "saturate(0.5) contrast(1.6)",
    paddingRight: "0.2em"
  }
}

const FontAwesomeIcons = (majorVersion = 4) => {
  switch (majorVersion) {
    case 4:
      IsFontAwesomeLoaded(4)
      return {
        // File Icons
        Gateway: <i
          style={icon("https://cdn-icons-png.flaticon.com/512/4945/4945853.png")}
          aria-hidden="true"
        />,
        Sensor: <i
          style={icon("https://cdn-icons-png.flaticon.com/512/4674/4674109.png")}
          aria-hidden="true"
        />,
        Folder: <i
          style={icon("https://cdn-icons-png.flaticon.com/512/3139/3139112.png")}
          aria-hidden="true"
        />,
        FolderOpen: <i
          style={icon("https://cdn-icons-png.flaticon.com/512/5082/5082720.png")}
          aria-hidden="true"
        />,

        // Button Icons
        Rename: <i
          style={icon("https://cdn-icons-png.flaticon.com/512/4904/4904522.png")}
          aria-hidden="true"
        />,
        Delete: <i
          style={icon("https://cdn-icons-png.flaticon.com/512/2496/2496733.png")}
          aria-hidden="true"
        />,
        Loading: <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true" />,
        Download: <i className="fa fa-download" aria-hidden="true" />,
      }
    case 5:
      IsFontAwesomeLoaded(5)
      return {
        File: <i className="far fa-file" aria-hidden="true" />,
        Image: <i className="far fa-file-image" aria-hidden="true" />,
        Video: <i className="far fa-file-video" aria-hidden="true" />,
        Audio: <i className="far fa-file-audio" aria-hidden="true" />,
        Archive: <i className="far fa-file-archive" aria-hidden="true" />,
        Word: <i className="far fa-file-word" aria-hidden="true" />,
        Excel: <i className="far fa-file-excel" aria-hidden="true" />,
        PowerPoint: <i className="far fa-file-powerpoint" aria-hidden="true" />,
        Text: <i className="far fa-file-alt" aria-hidden="true" />,
        PDF: <i className="far fa-file-pdf" aria-hidden="true" />,
        Rename: <i className="fas fa-i-cursor" aria-hidden="true" />,
        Folder: <i className="far fa-folder" aria-hidden="true" />,
        FolderOpen: <i className="far fa-folder-open" aria-hidden="true" />,
        Delete: <i className="far fa-trash-alt" aria-hidden="true" />,
        Loading: <i className="fas fa-circle-notch fa-spin" aria-hidden="true" />,
        Download: <i className="fas fa-download" aria-hidden="true" />,
      }
    default:
      console.warn(
        `Could not find config for version ${majorVersion}`,
        'Accepted versions are: 4, 5',
        'Please make an issue in `react-object-list` to fix this.'
      )
  }
}

export default FontAwesomeIcons
