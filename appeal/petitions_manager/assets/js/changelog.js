$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>🚀 Added:</b>",
      "Updated:": "<b>🔥 Updated:</b>",
      "Fixed:": "<b>✅ Fixed:</b>",
      "Removed:": "<b>❌ Removed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:|Removed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>🔥 Updated:</b> Plugin compatibility with the latest WordPress, translation file & documentation."
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
  var metaData = ["1.1.8", "20/03/2025"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2025, March 20 - v 1.1.8", ["Updated: Clugin constants.", "Updated: Plugin translation file."]],
    ["2025, March 18 - v 1.1.7", ["Updated: bwl-plugin-api(1.0.2) composer package.", "Updated: Custom post type APIs and taxonomies.", "Updated: Custom post type taxonomy filter.", "Updated: Plugin Constants & shortcode methods."]],
    ["2025, March 16 - v 1.1.6", ["Fixed: plugin meta info options panel URL. ", "Updated: composer.json file.", "Updated: plugin activation and deactivation function.", "Updated: plugin shortcode api.", "Removed: empty description tag from the wpbakery elements.", "Updated: Plugin missing translation texts."]],
    ["2025, March 10 - v 1.1.5", ["Fixed: WPBakery petition title display issue.", "Added: Display all latest signs and add scrollbars on hover.", "Updated: Plugin meta info class.", "Updated: Petition shortcode blocks code.", "Fixed: Language file loading issue.", "Fixed: Plugin custom post type column display issue.", "Updated: Plugin report page.", "Fixed: Petition sign verification link."]],
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
