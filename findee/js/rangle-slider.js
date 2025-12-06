(function ($) {
  "use strict";

  var rangeSliderOne = function () {
    if ($("#basic-slider-one").length > 0) {
      var skipSlider = document.getElementById("basic-slider-one");
      noUiSlider.create(skipSlider, {
        start: 25,
        connect: [true, false],
        behaviour: "snap",
        step: 1,
        range: {
          min: 0,
          max: 100,
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value);
          },
        },
      });

      var dirVal = document.querySelector(".field-dir");
      skipSlider.noUiSlider.on("update", function (val, e) {
        dirVal.innerHTML = val[e];
      });
    }
  };

  var rangeSliderTwo = function () {
    if ($("#price-value-range").length > 0) {
      var skipSlider = document.getElementById("price-value-range");
      var skipValues = [
        document.getElementById("price-min-value"),
        document.getElementById("price-max-value"),
      ];

      noUiSlider.create(skipSlider, {
        start: [18, 32],
        connect: true,
        step: 1,
        range: {
          min: 0,
          max: 100,
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value);
          },
        },
      });

      skipSlider.noUiSlider.on("update", function (val, e) {
        skipValues[e].innerText = val[e];
      });
    }
  };

  $(function () {
    rangeSliderOne();
    rangeSliderTwo();
  });
})(jQuery);
