$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Updated:": "<b>Updated:</b>",
      "Fixed:": "<b>Fixed:</b>",
      "Added:": "<b>Added:</b>",
    }

    return string.replace(/Updated:|Fixed:|Added:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>Updated:</b> Plugin compatibility with the latest WordPress, translation file & documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + updatesLogTag(log) + `</li>`
          })

          outputHtml += `<li>` + commonLogText + `</li>`
          outputHtml += `</ul>`
        }

        outputHtml += "</div>"

        $dynamic_log.before(outputHtml)
      })
    } else {
      alert("#dynamic_log is missing. Example: srcare doc")
    }
  }

  // Update Version and Last Update Info

  function updateMetaInfo(metaData) {
    const $lastUpdate = $(".update"),
      $ver = $(".ver")

    if ($lastUpdate.length) {
      $ver.html("").html(metaData[0])
      $lastUpdate.html("").html(metaData[1])
    } else {
      alert(".update is missing. Example: srcare doc")
    }
  }

  // Change only the version and date
  var metaData = ["1.1.4", "17/08/2024"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.

    ["2024, August 17 - v 1.1.4", ["Added: Users sign verification option.", "Added: Manual sign insert option.", "Added: Customizable email template option.", "Added: Email default text filter option.", "Updated: Plugin optins panel."]],
    ["2023, June 27 - v 1.1.3", ["Updated: Plugin code."]],
    ["2023, January 11 - v 1.1.2", ["Updated: Plugin optins panel."]],
    ["2022, July 11 - v 1.1.1", ["Fixed: Plugin minor bugs."]],
    ["2022, January 07 - v 1.1.0", ["Updated: Plugin code."]],
    ["2021, March 19 - v 1.0.9", ["Updated: Plugin optins panel."]],
    ["2020, June 21 - v 1.0.8", ["Added: Users sign verification option.", "Added: Manual sign insert option.", "Added: Customizable email template option.", "Added: Email default text filter option.", "Updated: Plugin optins panel."]],
    ["2020, January 20 - v 1.0.7", ["Added: Petition form fields customization option.", "Updated: Plugin optins panel."]],
  ]
  generateDynamicLog(changeLogData)
})
