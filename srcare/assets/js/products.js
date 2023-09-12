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
    let $productContainer

    if ($prodType == "themes") {
      $productContainer = $("#bwl_wp_themes")
    } else if ($prodType == "plugins") {
      $productContainer = $("#bwl_wp_plugins")
    } else {
      $productContainer = $("#bwl_html_templates")
    }

    if ($productContainer.length) {
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

        $productContainer.append(outputHtml)
      })
    }
  }

  // Just add a new row.

  const $themeForestUrl = "https://themeforest.net/item/"
  const $codeCanyonUrl = "https://codecanyon.net/item/"

  var themeProductsData = [
    // Add a new row below this comment.

    ["Knowledgedesk - Knowledge Base WP Theme", "https://1.envato.market/kdesk-wp", "kdesk_wp.jpg"],
    ["Senior Care - Elder Citizen WP Theme", "https://1.envato.market/srcare-wp", "srcare_wp.jpg"],
    ["Reddrop Buddies - Activism & Blood Donation Campaign WP Theme", "https://1.envato.market/rbuddies-wp", "reddrop_buddies_wp.jpg"],
    ["Sharai Khana - Multi-Concept Professional Services WP Theme", "https://1.envato.market/skhana-wp", "sharai_khana_wp.jpg"],
    ["Petapalozza - Pet Care WP Theme", "https://1.envato.market/petapalozza-wp", "petapalozza_wp.jpg"],
    ["Appeal - Functional Petition WP Theme", "https://1.envato.market/appeal-wp", "appeal_wp.jpg"],
    ["Wish - Charity WP Theme", "https://1.envato.market/wish-wp", "wish_wp.jpg"],
    ["Restore - Computer Repair Service WP Theme", "https://1.envato.market/restore-wp", "restore_wp.jpg"],
    ["Greenlife - Nature & Environmental WP Theme", "https://1.envato.market/greenlife-wp", "greenlife_wp.jpg"],
    ["Dynamism - Political & Activism WP Theme", "https://1.envato.market/dynamism-wp", "dynamism_wp.jpg"],
  ]
  generateProductsList(themeProductsData, "themes")

  // Plugins.

  var pluginsProductsData = [
    // Add a new row below this comment.

    ["BWL Advanced FAQ Manager", "https://1.envato.market/baf-wp", "baf.png"],
    ["BWL Post To Breaking News Manager", "https://1.envato.market/bnm-wp", "bnm.png"],
    ["BWL Pro Voting Manager", "https://1.envato.market/bpvm-wp", "bpvm.png"],
    ["BWL Knowledge Base Manager", "https://1.envato.market/bkbm-wp", "bkbm.png"],
    ["BWL Poll Manager", "https://1.envato.market/bpm-wp", "bpm.png"],
    ["WooCommerce Product FAQ Manager", "https://1.envato.market/wpfm-wp", "wpfm.png"],
    ["Attachment Tab For Woocommerce", "https://1.envato.market/atfc-wp", "atfc.png"],
    ["Ultimate Searchable Accordion For WPBakery Page Builder", "https://1.envato.market/usva-wp", "usva.png"],
  ]
  generateProductsList(pluginsProductsData, "plugins")

  // Templates.
  var templatesProductsData = [
    // Add a new row below this comment.

    ["Activism Buddies - Social Campaign & Non Profit Template", $themeForestUrl + "activism-buddies-social-campaign-non-profit-html5-template/22432719", "activism_buddies.jpg"],
    ["Appeal - Petition Template", $themeForestUrl + "appeal-petition-html5-template/16935278", "appeal.jpg"],
    ["Aqua Shatar - Professional Swim Academy Template", $themeForestUrl + "aqua-shatar-professional-swim-academy-html5-template/22314311", "aqua_shatar.jpg"],
    ["Auto Repair - Maintenance and Mechanic Center Template", $themeForestUrl + "auto-repair-maintenance-and-mechanic-center-html5-template/20375120", "auto_repair_template.jpg"],
    ["SmartFix - Computer Repair Center Template", $themeForestUrl + "smartfix-computer-repair-center-html5-template/25748439", "smart_fix.jpg"],
    ["Senior Care - Senior Citizens & Elders Support Template", $themeForestUrl + "senior-care-senior-citizens-elders-support-html5-template/19530660", "srcare_template.jpg"],
    ["Wish - Charity, Fundraising & Non-Profit Template", $themeForestUrl + "wish-charity-fundraising-nonprofit-html5-template/19295978", "wish.jpg"],
    ["Restore - Computer, Mobile & Digital Repair Shop Template", $themeForestUrl + "restore-computer-mobile-digital-repair-shop-html5-template/19158607", "restore.jpg"],
  ]
  generateProductsList(templatesProductsData)
})
