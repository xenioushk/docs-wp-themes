$(function () {
  // Update the log text

  const $productThumbUrl = "https://projects.bluewindlab.net/product-thumbs/"

  function updatesLogTag(string) {
    let Obj = {
      "Updated:": "<b>Updated:</b>",
      "Fixed:": "<b>Fixed:</b>",
    }

    return string.replace(/Updated:|Fixed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateProductsList(data, $prodType = "templates") {
    const $bwl_html_templates = $("#bwl_html_templates")
    if ($bwl_html_templates.length) {
      data.forEach((element) => {
        var outputHtml = "<li>"

        var $itemTitle = element[0]
        var $envatoLink = element[1]
        var $thumb = element[2]

        outputHtml +=
          `<a href="` +
          $envatoLink +
          `" target="_blank" title="` +
          $itemTitle +
          `">
        <img src="` +
          $productThumbUrl +
          $prodType +
          `/` +
          $thumb +
          `" alt="` +
          $itemTitle +
          `">` +
          $itemTitle +
          `</a>`

        outputHtml += "</li>"

        $bwl_html_templates.append(outputHtml)
      })
    }
  }

  // Just add a new row.

  const $themeForestUrl = "https://themeforest.net/item/"

  var productsData = [
    // Add a new row below this comment.

    ["Activism Buddies - Social Campaign & Non Profit Template", $themeForestUrl + "activism-buddies-social-campaign-non-profit-html5-template/22432719", "activism_buddies.jpg"],
    ["Appeal - Petition HTML5 Template", $themeForestUrl + "appeal-petition-html5-template/16935278", "appeal.jpg"],
    ["SmartFix - Computer Repair Center Template", $themeForestUrl + "smartfix-computer-repair-center-html5-template/25748439", "smart_fix.jpg"],
    ["Senior Care - Senior Citizens & Elders Support Template", $themeForestUrl + "senior-care-senior-citizens-elders-support-html5-template/19530660", "srcare_template.jpg"],
    ["Wish - Charity, Fundraising & Non-Profit Template", $themeForestUrl + "wish-charity-fundraising-nonprofit-html5-template/19295978", "wish.jpg"],
  ]
  generateProductsList(productsData)
})
