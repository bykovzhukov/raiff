function isImageLoaded(img) {
    if (
      !img.complete
      || (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0)
    ) {
        return false;
    }

    return true;
  };

export default function (el, callback) {
    el.addEventListener('load', callback);
    if (isImageLoaded(el)) {
        el.dispatchEvent(new Event('load'));
    }
};