var wp;
((((wp ||= {}).impex ||= {}).extension ||= {}).export ||= {}).attachments = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/hooks
  var require_hooks = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/hooks"(exports, module) {
      module.exports = window.wp.hooks;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/debug
  var require_debug = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/debug"(exports, module) {
      module.exports = wp.impex.debug;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/filters
  var require_filters = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/filters"(exports, module) {
      module.exports = wp.impex.filters;
    }
  });

  // plugins/cm4all-wp-impex/src/wp.impex.extension.export.attachments.mjs
  var import_hooks = __toESM(require_hooks(), 1);
  var import_debug = __toESM(require_debug(), 1);
  var import_filters = __toESM(require_filters(), 1);
  var debug = import_debug.default.default("wp.impex.attachments");
  debug("huhu!");
  import_hooks.default.addFilter(
    import_filters.default.SLICE_REST_UNMARSHAL,
    import_filters.default.NAMESPACE,
    async function(namespace, slice, sliceIndex, chunkDirHandle) {
      if (slice["tag"] === "attachment" && slice["meta"]["entity"] === "attachment" && slice["type"] === "resource") {
        const _links_self = slice["_links"]?.["self"];
        if (_links_self) {
          for (const entry of _links_self) {
            const href = entry["href"];
            const filename = `slice-${sliceIndex.toString().padStart(4, "0")}-attachment.blob`;
            await fetch(href).then(async (response) => {
              attachmentFileHandle = await chunkDirHandle.getFileHandle(
                filename,
                {
                  create: true
                }
              );
              const writable = await attachmentFileHandle.createWritable();
              await response.body.pipeTo(writable);
            });
          }
        }
        delete slice["_links"];
      }
      return slice;
    }
  );
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkB3b3JkcHJlc3MvaG9va3MiLCAiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkBjbTRhbGwtaW1wZXgvZGVidWciLCAiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkBjbTRhbGwtaW1wZXgvZmlsdGVycyIsICIuLi9zcmMvd3AuaW1wZXguZXh0ZW5zaW9uLmV4cG9ydC5hdHRhY2htZW50cy5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmhvb2tzOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdwLmltcGV4LmRlYnVnOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdwLmltcGV4LmZpbHRlcnM7IiwgImltcG9ydCBob29rcyBmcm9tIFwiQHdvcmRwcmVzcy9ob29rc1wiO1xuaW1wb3J0IERlYnVnIGZyb20gXCJAY200YWxsLWltcGV4L2RlYnVnXCI7XG5pbXBvcnQgSW1wZXhGaWx0ZXJzIGZyb20gXCJAY200YWxsLWltcGV4L2ZpbHRlcnNcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1Zy5kZWZhdWx0KFwid3AuaW1wZXguYXR0YWNobWVudHNcIik7XG5kZWJ1ZyhcImh1aHUhXCIpO1xuXG5ob29rcy5hZGRGaWx0ZXIoXG4gIEltcGV4RmlsdGVycy5TTElDRV9SRVNUX1VOTUFSU0hBTCxcbiAgSW1wZXhGaWx0ZXJzLk5BTUVTUEFDRSxcbiAgYXN5bmMgZnVuY3Rpb24gKG5hbWVzcGFjZSwgc2xpY2UsIHNsaWNlSW5kZXgsIGNodW5rRGlySGFuZGxlKSB7XG4gICAgaWYgKFxuICAgICAgc2xpY2VbXCJ0YWdcIl0gPT09IFwiYXR0YWNobWVudFwiICYmXG4gICAgICBzbGljZVtcIm1ldGFcIl1bXCJlbnRpdHlcIl0gPT09IFwiYXR0YWNobWVudFwiICYmXG4gICAgICBzbGljZVtcInR5cGVcIl0gPT09IFwicmVzb3VyY2VcIlxuICAgICkge1xuICAgICAgY29uc3QgX2xpbmtzX3NlbGYgPSBzbGljZVtcIl9saW5rc1wiXT8uW1wic2VsZlwiXTtcblxuICAgICAgaWYgKF9saW5rc19zZWxmKSB7XG4gICAgICAgIC8vIGRvd25sb2FkIGF0dGFjaG1lbnRzIHRvIGxvY2FsIGZvbGRlclxuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIF9saW5rc19zZWxmKSB7XG4gICAgICAgICAgY29uc3QgaHJlZiA9IGVudHJ5W1wiaHJlZlwiXTtcblxuICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID1cbiAgICAgICAgICAgIGBzbGljZS0ke3NsaWNlSW5kZXgudG9TdHJpbmcoKS5wYWRTdGFydCg0LCBcIjBcIil9LWF0dGFjaG1lbnQuYmxvYmA7XG5cbiAgICAgICAgICBhd2FpdCBmZXRjaChocmVmKS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgYXR0YWNobWVudEZpbGVIYW5kbGUgPSBhd2FpdCBjaHVua0RpckhhbmRsZS5nZXRGaWxlSGFuZGxlKFxuICAgICAgICAgICAgICBmaWxlbmFtZSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB3cml0YWJsZSA9IGF3YWl0IGF0dGFjaG1lbnRGaWxlSGFuZGxlLmNyZWF0ZVdyaXRhYmxlKCk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLmJvZHkucGlwZVRvKHdyaXRhYmxlKTtcblxuICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vd2ViLmRldi9maWxlLXN5c3RlbS1hY2Nlc3MvXG4gICAgICAgICAgICAvLyA9PiBwaXBlVG8oKSBjbG9zZXMgdGhlIGRlc3RpbmF0aW9uIHBpcGUgYnkgZGVmYXVsdCwgbm8gbmVlZCB0byBjbG9zZSBpdC5cbiAgICAgICAgICAgIC8vIGF3YWl0IHdyaXRhYmxlLmNsb3NlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHNsaWNlW1wiX2xpbmtzXCJdO1xuICAgICAgLypcbiAgICAgIHNsaWNlWydfbGlua3MnXVsnc2VsZiddW10gPSBbXG4gICAgICAgICdocmVmJyA9PiBzbGljZVtJbXBleDo6U0xJQ0VfTUVUQV1bJ2RhdGEnXVsnZ3VpZCddLFxuICAgICAgICAndGFnJyAgPT4gQXR0YWNobWVudHNFeHBvcnRlcjo6U0xJQ0VfVEFHLFxuICAgICAgICAncHJvdmlkZXInICA9PiBBdHRhY2htZW50c0V4cG9ydGVyOjpQUk9WSURFUl9OQU1FLFxuICAgICAgXTtcbiAgICAgICovXG4gICAgfVxuXG4gICAgcmV0dXJuIHNsaWNlO1xuICB9LFxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUc7QUFBQTtBQUFBOzs7QUNBM0I7QUFBQTtBQUFBLGFBQU8sVUFBVSxHQUFHLE1BQU07QUFBQTtBQUFBOzs7QUNBMUI7QUFBQTtBQUFBLGFBQU8sVUFBVSxHQUFHLE1BQU07QUFBQTtBQUFBOzs7QUNBMUIscUJBQWtCO0FBQ2xCLHFCQUFrQjtBQUNsQix1QkFBeUI7QUFFekIsTUFBTSxRQUFRLGFBQUFBLFFBQU0sUUFBUSxzQkFBc0I7QUFDbEQsUUFBTSxPQUFPO0FBRWIsZUFBQUMsUUFBTTtBQUFBLElBQ0osZUFBQUMsUUFBYTtBQUFBLElBQ2IsZUFBQUEsUUFBYTtBQUFBLElBQ2IsZUFBZ0IsV0FBVyxPQUFPLFlBQVksZ0JBQWdCO0FBQzVELFVBQ0UsTUFBTSxLQUFLLE1BQU0sZ0JBQ2pCLE1BQU0sTUFBTSxFQUFFLFFBQVEsTUFBTSxnQkFDNUIsTUFBTSxNQUFNLE1BQU0sWUFDbEI7QUFDQSxjQUFNLGNBQWMsTUFBTSxRQUFRLElBQUksTUFBTTtBQUU1QyxZQUFJLGFBQWE7QUFFZixxQkFBVyxTQUFTLGFBQWE7QUFDL0Isa0JBQU0sT0FBTyxNQUFNLE1BQU07QUFFekIsa0JBQU0sV0FDSixTQUFTLFdBQVcsU0FBUyxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFFakQsa0JBQU0sTUFBTSxJQUFJLEVBQUUsS0FBSyxPQUFPLGFBQWE7QUFDekMscUNBQXVCLE1BQU0sZUFBZTtBQUFBLGdCQUMxQztBQUFBLGdCQUNBO0FBQUEsa0JBQ0UsUUFBUTtBQUFBLGdCQUNWO0FBQUEsY0FDRjtBQUNBLG9CQUFNLFdBQVcsTUFBTSxxQkFBcUIsZUFBZTtBQUUzRCxvQkFBTSxTQUFTLEtBQUssT0FBTyxRQUFRO0FBQUEsWUFLckMsQ0FBQztBQUFBLFVBQ0g7QUFBQSxRQUNGO0FBRUEsZUFBTyxNQUFNLFFBQVE7QUFBQSxNQVF2QjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjsiLAogICJuYW1lcyI6IFsiRGVidWciLCAiaG9va3MiLCAiSW1wZXhGaWx0ZXJzIl0KfQo=
