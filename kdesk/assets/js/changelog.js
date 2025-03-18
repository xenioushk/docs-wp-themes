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
    const commonLogText = "<b>🔥 Updated:</b> Theme compatibility with the latest WordPress, translation file & documentation."
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
  var metaData = ["1.4.6", "13/12/2024"]
  updateMetaInfo(metaData)

  // Just add a new row.
  // @sample: ["2023, July, 13 - v 1.3.6", ["Updated: BWl Knowledge Base Manager Plugin to 1.4.5", "Fixed: Translation issue of 404 page.", "Updated: Theme compatibility with the latest WordPress."]],
  var changeLogData = [
    // Add a new row below this comment.

    ["2024, December 13 - v 1.4.6", ["Fixed: Search banner block issue for mobile menu.", "Updated: WPBakery Page Builder to 8.1", "Updated: kdesk WPBakery Page Builder Addon 1.4.0"]],
    ["2024, December 10 - v 1.4.5", ["Fixed: Translation notice for WP 6.7.1", "Updated: WPBakery Page Builder to 8.0.1", "Updated: BWl Knowledge Base Manager Plugin to 1.5.5", "Updated: Ultimate Searchable Accordion - WPBakery Page Builder Addon 1.3.0"]],
    ["2024, September 21 - v 1.4.3", ["Updated: WPBakery Page Builder to 7.9", "Updated: BWl Knowledge Base Manager Plugin to 1.5.4", "Updated: Ultimate Searchable Accordion - WPBakery Page Builder Addon 1.2.9"]],
    ["2024, July 10 - v 1.4.2", ["Fixed: Breadcrumb bugs.", "Added: Default blog title and link to the breadcrumb."]],
    ["2024, June 20 - v 1.4.1", ["Updated: WPBakery Page Builder to 7.7.2", "Updated: kdesk WPBakery Page Builder Addon 1.3.7", "Updated: BWl Knowledge Base Manager Plugin to 1.5.1", "Fixed: WooCommerce header cart icon issue.", "Fixed: WooCommerce product page duplicate h1 tags.", "Fixed: WooCommerce cart checkbox alignment issue.", "Fixed: WooCommerce shop page breadcrumb issue.", "Fixed: Knowledgebase box layout breaking issue."]],
    ["2024, April 23 - v 1.4.0", ["Updated: WPBakery Page Builder to 7.6", "Updated: WooCommerce single product template."]],
    ["2024, March 12 - v 1.3.9", ["Updated: WPBakery Page Builder to 7.5", "Updated: BWl Knowledge Base Manager Plugin to 1.5.0", "Updated: Ultimate Searchable Accordion - WPBakery Page Builder Addon 1.2.7"]],
    ["2023, October 20 - v 1.3.8", ["Fixed: Breadcrumb issue for kb tags.", "Fixed: Ultimate Searchable Accordion installation issue"]],
    ["2023, October 19 - v 1.3.7", ["Updated: WPBakery Page Builder to 7.1", "Updated: BWl Knowledge Base Manager Plugin to 1.4.8", "Updated: Ultimate Searchable Accordion - WPBakery Page Builder Addon 1.2.3", "Updated: kdesk WPBakery Page Builder Addon 1.3.6"]],
    ["2023, July 13 - v 1.3.6", ["Updated: BWl Knowledge Base Manager Plugin to 1.4.5"]],
  ]
  generateDynamicLog(changeLogData)
})
