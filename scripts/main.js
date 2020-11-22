$(document).ready(function () {
  $(".about__btn").click(function () {
    this.className = this.className == "down" ? "up" : "down";
  });

  $(".rotate1").click(function () {
    $(".list__show1").slideToggle(500);
  });
  $(".rotate2").click(function () {
    $(".list__show2").slideToggle(500);
  });
  $(".rotate3").click(function () {
    $(".list__show3").slideToggle(500);
  });
  $(".rotate4").click(function () {
    $(".list__show4").slideToggle(500);
  });
  $(".rotate5").click(function () {
    $(".list__show5").slideToggle(500);
  });
  $(".rotate6").click(function () {
    $(".list__show6").slideToggle(500);
  });
});

$(".images__inner a")
  .fancybox({
    animationEffect: "fade",
  })
  .attr("data-fancybox", "gallery");

$("[data-fancybox]").fancybox({
  thumbs: false,
  hash: false,
  loop: true,
  keyboard: true,
  toolbar: true,
  buttons: ["close"],
  animationEffect: false,
  arrows: true,
  openEffect: true,
  closeClick: true,
});

jQuery(document).ready(function ($) {
  function triggerFilter($bool) {
    var elementsToTrigger = $([
      $(".cd-tab-filter"),
      $(".cd-gallery"),
    ]);
    elementsToTrigger.each(function () {
      $(this).toggleClass("filter-is-visible", $bool);
    });
  }

  //mobile version - detect click event on filters tab
  var filter_tab_placeholder = $(".cd-tab-filter .placeholder a"),
    filter_tab_placeholder_default_value = "Выбор",
    filter_tab_placeholder_text = filter_tab_placeholder.text();

  $(".cd-tab-filter li").on("click", function (event) {
    //detect which tab filter item was selected
    var selected_filter = $(event.target).data("type");

    //check if user has clicked the placeholder item
    if ($(event.target).is(filter_tab_placeholder)) {
      filter_tab_placeholder_default_value == filter_tab_placeholder.text() ?
        filter_tab_placeholder.text(filter_tab_placeholder_text) :
        filter_tab_placeholder.text(filter_tab_placeholder_default_value);
      $(".cd-tab-filter").toggleClass("is-open");

      //check if user has clicked a filter already selected
    } else if (filter_tab_placeholder.data("type") == selected_filter) {
      filter_tab_placeholder.text($(event.target).text());
      $(".cd-tab-filter").removeClass("is-open");
    } else {
      //close the dropdown and change placeholder text/data-type value
      $(".cd-tab-filter").removeClass("is-open");
      filter_tab_placeholder
        .text($(event.target).text())
        .data("type", selected_filter);
      filter_tab_placeholder_text = $(event.target).text();

      $(".cd-tab-filter .selected").removeClass("selected");
      $(event.target).addClass("selected");
    }
  });

  buttonFilter.init();
  $(".cd-gallery ul").mixItUp({
    controls: {
      enable: false,
    },
    callbacks: {
      onMixStart: function () {
        $(".cd-fail-message").fadeOut(200);
      },
      onMixFail: function () {
        $(".cd-fail-message").fadeIn(200);
      },
    },
  });

  var inputText;
  var $matching = $();

  var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

});


var buttonFilter = {
  $filters: null,
  groups: [],
  outputArray: [],
  outputString: "",

  init: function () {
    var self = this;

    self.$filters = $(".cd-main-content");
    self.$container = $(".cd-gallery ul");

    self.$filters.find(".cd-filters").each(function () {
      var $this = $(this);

      self.groups.push({
        $inputs: $this.find(".filter"),
        active: "",
        tracker: false,
      });
    });

    self.bindHandlers();
  },

  bindHandlers: function () {
    var self = this;

    self.$filters.on("click", "a", function (e) {
      self.parseFilters();
    });
    self.$filters.on("change", function () {
      self.parseFilters();
    });
  },

  parseFilters: function () {
    var self = this;

    for (var i = 0, group;
      (group = self.groups[i]); i++) {
      group.active = [];
      group.$inputs.each(function () {
        var $this = $(this);
        if ($this.is("select")) {
          group.active.push($this.val());
        } else if ($this.find(".selected").length > 0) {
          group.active.push($this.attr("data-filter"));
        }
      });
    }
    self.concatenate();
  },

  concatenate: function () {
    var self = this;

    self.outputString = "";

    for (var i = 0, group;
      (group = self.groups[i]); i++) {
      self.outputString += group.active;
    }

    !self.outputString.length && (self.outputString = "all");

    if (self.$container.mixItUp("isLoaded")) {
      self.$container.mixItUp("filter", self.outputString);
    }
  },
};