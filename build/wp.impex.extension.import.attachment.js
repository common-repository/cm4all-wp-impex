var wp;
((((wp ||= {}).impex ||= {}).extension ||= {}).import ||= {}).attachment = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
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
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

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

  // plugins/cm4all-wp-impex/src/wp.impex.extension.import.attachment.mjs
  var wp_impex_extension_import_attachment_exports = {};
  __export(wp_impex_extension_import_attachment_exports, {
    default: () => wp_impex_extension_import_attachment_default
  });
  var import_hooks = __toESM(require_hooks(), 1);
  var import_debug = __toESM(require_debug(), 1);
  var import_filters = __toESM(require_filters(), 1);
  var debug = import_debug.default.default("wp.impex.attachments");
  debug("huhu!");
  import_hooks.default.addFilter(
    import_filters.default.SLICE_REST_UPLOAD,
    import_filters.default.NAMESPACE,
    async function(namespace, slice, sliceIndex, chunkDirHandle, formData) {
      if (slice["tag"] === "attachment" && slice["meta"]["entity"] === "attachment" && slice["type"] === "resource") {
        const localAttachmentFilename = `slice-${sliceIndex.toString().padStart(4, "0")}-` + slice["data"].split(/[\\/]/).pop();
        const localAttachmentFileHandle = await chunkDirHandle.getFileHandle(localAttachmentFilename).catch((NotFoundError) => {
          return chunkDirHandle.getFileHandle(`slice-${sliceIndex.toString().padStart(4, "0")}-attachment.blob`);
        }).catch((e) => {
          console.log(localAttachmentFilename);
          return Promise.reject(e);
        });
        formData.append(
          // constant was injected using \wp_add_inline_script
          wp.impex.extension.import.attachment.WP_FILTER_IMPORT_REST_SLICE_UPLOAD_FILE,
          await localAttachmentFileHandle.getFile()
        );
      }
      return slice;
    }
  );
  var wp_impex_extension_import_attachment_default = {};
  return __toCommonJS(wp_impex_extension_import_attachment_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkB3b3JkcHJlc3MvaG9va3MiLCAiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkBjbTRhbGwtaW1wZXgvZGVidWciLCAiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkBjbTRhbGwtaW1wZXgvZmlsdGVycyIsICIuLi9zcmMvd3AuaW1wZXguZXh0ZW5zaW9uLmltcG9ydC5hdHRhY2htZW50Lm1qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuaG9va3M7IiwgIm1vZHVsZS5leHBvcnRzID0gd3AuaW1wZXguZGVidWc7IiwgIm1vZHVsZS5leHBvcnRzID0gd3AuaW1wZXguZmlsdGVyczsiLCAiaW1wb3J0IGhvb2tzIGZyb20gXCJAd29yZHByZXNzL2hvb2tzXCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZGVidWdcIjtcbmltcG9ydCBJbXBleEZpbHRlcnMgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZmlsdGVyc1wiO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnLmRlZmF1bHQoXCJ3cC5pbXBleC5hdHRhY2htZW50c1wiKTtcbmRlYnVnKFwiaHVodSFcIik7XG5cbmhvb2tzLmFkZEZpbHRlcihcbiAgSW1wZXhGaWx0ZXJzLlNMSUNFX1JFU1RfVVBMT0FELFxuICBJbXBleEZpbHRlcnMuTkFNRVNQQUNFLFxuICBhc3luYyBmdW5jdGlvbiAobmFtZXNwYWNlLCBzbGljZSwgc2xpY2VJbmRleCwgY2h1bmtEaXJIYW5kbGUsIGZvcm1EYXRhKSB7XG4gICAgaWYgKFxuICAgICAgc2xpY2VbXCJ0YWdcIl0gPT09IFwiYXR0YWNobWVudFwiICYmXG4gICAgICBzbGljZVtcIm1ldGFcIl1bXCJlbnRpdHlcIl0gPT09IFwiYXR0YWNobWVudFwiICYmXG4gICAgICBzbGljZVtcInR5cGVcIl0gPT09IFwicmVzb3VyY2VcIlxuICAgICkge1xuICAgICAgY29uc3QgbG9jYWxBdHRhY2htZW50RmlsZW5hbWUgPVxuICAgICAgICBgc2xpY2UtJHtzbGljZUluZGV4LnRvU3RyaW5nKCkucGFkU3RhcnQoNCwgXCIwXCIpfS1gICtcbiAgICAgICAgc2xpY2VbXCJkYXRhXCJdLnNwbGl0KC9bXFxcXC9dLykucG9wKCk7XG5cbiAgICAgIGNvbnN0IGxvY2FsQXR0YWNobWVudEZpbGVIYW5kbGUgPSBhd2FpdCBjaHVua0RpckhhbmRsZVxuICAgICAgICAuZ2V0RmlsZUhhbmRsZShsb2NhbEF0dGFjaG1lbnRGaWxlbmFtZSlcbiAgICAgICAgLmNhdGNoKChOb3RGb3VuZEVycm9yKT0+e1xuICAgICAgICAgIHJldHVybiBjaHVua0RpckhhbmRsZS5nZXRGaWxlSGFuZGxlKGBzbGljZS0ke3NsaWNlSW5kZXgudG9TdHJpbmcoKS5wYWRTdGFydCg0LCBcIjBcIil9LWF0dGFjaG1lbnQuYmxvYmApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbEF0dGFjaG1lbnRGaWxlbmFtZSk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9KTtcblxuICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAvLyBjb25zdGFudCB3YXMgaW5qZWN0ZWQgdXNpbmcgXFx3cF9hZGRfaW5saW5lX3NjcmlwdFxuICAgICAgICB3cC5pbXBleC5leHRlbnNpb24uaW1wb3J0LmF0dGFjaG1lbnRcbiAgICAgICAgICAuV1BfRklMVEVSX0lNUE9SVF9SRVNUX1NMSUNFX1VQTE9BRF9GSUxFLFxuICAgICAgICBhd2FpdCBsb2NhbEF0dGFjaG1lbnRGaWxlSGFuZGxlLmdldEZpbGUoKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNsaWNlO1xuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQge307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUc7QUFBQTtBQUFBOzs7QUNBM0I7QUFBQTtBQUFBLGFBQU8sVUFBVSxHQUFHLE1BQU07QUFBQTtBQUFBOzs7QUNBMUI7QUFBQTtBQUFBLGFBQU8sVUFBVSxHQUFHLE1BQU07QUFBQTtBQUFBOzs7QUNBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBa0I7QUFDbEIscUJBQWtCO0FBQ2xCLHVCQUF5QjtBQUV6QixNQUFNLFFBQVEsYUFBQUEsUUFBTSxRQUFRLHNCQUFzQjtBQUNsRCxRQUFNLE9BQU87QUFFYixlQUFBQyxRQUFNO0FBQUEsSUFDSixlQUFBQyxRQUFhO0FBQUEsSUFDYixlQUFBQSxRQUFhO0FBQUEsSUFDYixlQUFnQixXQUFXLE9BQU8sWUFBWSxnQkFBZ0IsVUFBVTtBQUN0RSxVQUNFLE1BQU0sS0FBSyxNQUFNLGdCQUNqQixNQUFNLE1BQU0sRUFBRSxRQUFRLE1BQU0sZ0JBQzVCLE1BQU0sTUFBTSxNQUFNLFlBQ2xCO0FBQ0EsY0FBTSwwQkFDSixTQUFTLFdBQVcsU0FBUyxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFDL0MsTUFBTSxNQUFNLEVBQUUsTUFBTSxPQUFPLEVBQUUsSUFBSTtBQUVuQyxjQUFNLDRCQUE0QixNQUFNLGVBQ3JDLGNBQWMsdUJBQXVCLEVBQ3JDLE1BQU0sQ0FBQyxrQkFBZ0I7QUFDdEIsaUJBQU8sZUFBZSxjQUFjLFNBQVMsV0FBVyxTQUFTLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQyxrQkFBa0I7QUFBQSxRQUN2RyxDQUFDLEVBQ0EsTUFBTSxDQUFDLE1BQU07QUFDWixrQkFBUSxJQUFJLHVCQUF1QjtBQUNuQyxpQkFBTyxRQUFRLE9BQU8sQ0FBQztBQUFBLFFBQ3pCLENBQUM7QUFFSCxpQkFBUztBQUFBO0FBQUEsVUFFUCxHQUFHLE1BQU0sVUFBVSxPQUFPLFdBQ3ZCO0FBQUEsVUFDSCxNQUFNLDBCQUEwQixRQUFRO0FBQUEsUUFDMUM7QUFBQSxNQUNGO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBRUEsTUFBTywrQ0FBUSxDQUFDOyIsCiAgIm5hbWVzIjogWyJEZWJ1ZyIsICJob29rcyIsICJJbXBleEZpbHRlcnMiXQp9Cg==
