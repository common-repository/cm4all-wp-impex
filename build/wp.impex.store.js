var wp;
((wp ||= {}).impex ||= {}).store = (() => {
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

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/data
  var require_data = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/data"(exports, module) {
      module.exports = window.wp.data;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/api-fetch
  var require_api_fetch = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/api-fetch"(exports, module) {
      module.exports = window.wp.apiFetch;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/url
  var require_url = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/url"(exports, module) {
      module.exports = window.wp.url;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/debug
  var require_debug = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/debug"(exports, module) {
      module.exports = wp.impex.debug;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/i18n
  var require_i18n = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/i18n"(exports, module) {
      module.exports = window.wp.i18n;
    }
  });

  // plugins/cm4all-wp-impex/src/wp.impex.store.mjs
  var wp_impex_store_exports = {};
  __export(wp_impex_store_exports, {
    KEY: () => KEY,
    default: () => wp_impex_store_default
  });
  var import_data = __toESM(require_data(), 1);
  var import_api_fetch = __toESM(require_api_fetch(), 1);
  var import_url = __toESM(require_url(), 1);
  var import_debug = __toESM(require_debug(), 1);
  var import_i18n = __toESM(require_i18n(), 1);
  var debug = import_debug.default.default("wp.impex.store");
  debug("loaded");
  var KEY = "cm4all/impex";
  async function wp_impex_store_default(settings) {
    const { namespace, base_uri, site_url } = settings;
    const DEFAULT_STATE = {
      settings,
      imports: [],
      exports: [],
      importProfiles: [],
      exportProfiles: []
    };
    const discovery = await (0, import_api_fetch.default)({
      path: "/"
    });
    if (!discovery.namespaces.includes(namespace)) {
      throw `rest discovery doesn't provide expected impex rest namespace(=${namespace})`;
    }
    if (!discovery.routes[base_uri]) {
      throw `rest discovery doesn't provide expected impex rest route (=${base_uri})`;
    }
    const actions = {
      // this is a redux thunk (see https://make.wordpress.org/core/2021/10/29/thunks-in-gutenberg/)
      createAndUploadConsumeImport: (importProfile, importOptions, screenContext) => async function* ({ dispatch, registry, resolveSelect, select }) {
        debug({ importProfile, importOptions });
        let importDirHandle = null;
        try {
          importDirHandle = await window.showDirectoryPicker({
            // You can suggest a default start directory by passing a startIn property to the showSaveFilePicker
            startIn: "downloads",
            id: "impex-import-dir"
          });
        } catch {
          return;
        }
        yield {
          type: "progress",
          title: (0, import_i18n.__)("Import", "cm4all-wp-impex"),
          message: (0, import_i18n.__)("Creating snapshot ...", "cm4all-wp-impex")
        };
        const createdImport = (await dispatch.createImport(
          `transient-import-${window.crypto.randomUUID()}`,
          `machine generated transient export snapshot created using profile ${importProfile.name}`,
          importProfile,
          {}
        )).payload;
        try {
          yield {
            type: "progress",
            title: (0, import_i18n.__)("Import", "cm4all-wp-impex"),
            message: (0, import_i18n.__)("Uploading slices ...", "cm4all-wp-impex")
          };
          const sliceFiles = await screenContext._getSliceFilesToImport(importDirHandle);
          const finished = await screenContext._uploadSlices(createdImport, sliceFiles);
          yield {
            type: "progress",
            title: (0, import_i18n.__)("Import", "cm4all-wp-impex"),
            message: (0, import_i18n.__)("Importing slices ...", "cm4all-wp-impex")
          };
          await dispatch.consumeImport(
            createdImport.id,
            importOptions,
            null,
            null
          );
          await (yield {
            type: "info",
            title: (0, import_i18n.__)("Import completed", "cm4all-wp-impex"),
            message: (0, import_i18n.__)("Successfully finished import.", "cm4all-wp-impex")
          });
        } finally {
          if (createdImport) {
            await dispatch.deleteImport(createdImport.id);
          }
        }
      },
      // this is a redux thunk (see https://make.wordpress.org/core/2021/10/29/thunks-in-gutenberg/)
      createAndDownloadExport: (exportProfile, screenContext) => async function* ({ dispatch, registry, resolveSelect, select }) {
        let exportsDirHandle = null;
        try {
          exportsDirHandle = await window.showDirectoryPicker({
            startIn: "downloads",
            mode: "readwrite",
            id: "impex-export-dir"
          });
        } catch {
          return;
        }
        let _exportFolderName = screenContext.normalizeFilename(
          `${window.location.hostname}-${exportProfile.name}-${screenContext.currentDateString()}`
        );
        _exportFolderName = prompt(
          "Enter name of the export (max 32 characters):",
          _exportFolderName
        );
        if (!_exportFolderName) {
          await (yield {
            type: "info",
            title: (0, import_i18n.__)("Export aborted", "cm4all-wp-impex"),
            message: (0, import_i18n.__)("You canceled the export or entered an invalid export name", "cm4all-wp-impex")
          });
          return;
        }
        try {
          await exportsDirHandle.getDirectoryHandle(
            _exportFolderName,
            {
              create: false
            }
          );
          throw new Error(
            `Export folder ${_exportFolderName} already exists. Please remove/rename it and continue.
(${ex.message})`
          );
        } catch {
        }
        const exportDirHandle = await exportsDirHandle.getDirectoryHandle(
          _exportFolderName,
          {
            create: true
          }
        );
        debug({ exportDirHandle });
        let createdExport = null;
        try {
          yield {
            type: "progress",
            title: (0, import_i18n.__)("Export", "cm4all-wp-impex"),
            message: (0, import_i18n.__)("Creating snapshot", "cm4all-wp-impex")
          };
          createdExport = (await dispatch.createExport(
            exportProfile,
            `transient-export-${window.crypto.randomUUID()}`,
            `machine generated transient snapshot created using profile ${exportProfile.name}`
            // const date = screenContext.currentDateString();
            // const name = `${site_url.hostname}-${exportProfile.name}-${date}`;
            // const description = `Export '${exportProfile.name}' created by user '${currentUser.name}' at ${date}`;
          )).payload;
          const path = `${settings.base_uri}/export/${createdExport.id}/slice`;
          yield {
            type: "progress",
            title: (0, import_i18n.__)("Downloading snapshot", "cm4all-wp-impex"),
            message: (0, import_i18n.__)("Creating snapshot", "cm4all-wp-impex")
          };
          const initialResponse = await (0, import_api_fetch.default)({
            path,
            // parse: false is needed to geta access to the headers
            parse: false
          });
          const x_wp_total_pages = Number.parseInt(
            initialResponse.headers.get("X-WP-TotalPages")
          );
          const sliceChunks = [
            screenContext.saveSlicesChunk(exportDirHandle, initialResponse.json(), 1)
          ];
          for (let chunk = 2; chunk <= x_wp_total_pages; chunk++) {
            sliceChunks.push(
              screenContext.saveSlicesChunk(
                exportDirHandle,
                (0, import_api_fetch.default)({
                  path: import_url.default.addQueryArgs(path, { page: chunk })
                }),
                chunk
              )
            );
          }
          await Promise.all(sliceChunks);
          await (yield {
            type: "info",
            title: (0, import_i18n.__)("Export completed", "cm4all-wp-impex"),
            message: (0, import_i18n.__)("Successfully finished export.", "cm4all-wp-impex")
          });
        } finally {
          if (createdExport) {
            await dispatch.deleteExport(createdExport.id);
          } else {
            await exportsDirHandle.removeEntry(exportDirHandle.name, { recursive: true });
          }
        }
      },
      async createExport(exportProfile, name = "", description = "") {
        const payload = await (0, import_api_fetch.default)({
          path: `${settings.base_uri}/export`,
          method: "POST",
          data: { profile: exportProfile.name, name, description }
        });
        return {
          type: "ADD_EXPORT",
          payload
        };
      },
      setExports(exports) {
        return {
          type: "SET_EXPORTS",
          payload: exports
        };
      },
      async updateExport(id, data2) {
        const updatedExport = await (0, import_api_fetch.default)({
          path: `${DEFAULT_STATE.settings.base_uri}/export/${id}`,
          method: "PATCH",
          data: data2
        });
        return {
          type: "UPDATE_EXPORT",
          payload: updatedExport
        };
      },
      async deleteExport(id) {
        const deletedExport = await (0, import_api_fetch.default)({
          path: `${settings.base_uri}/export/${id}`,
          method: "DELETE"
        });
        return {
          type: "DELETE_EXPORT",
          payload: id
        };
      },
      async createImport(name, description, importProfile, options) {
        const payload = await (0, import_api_fetch.default)({
          path: `${settings.base_uri}/import`,
          method: "POST",
          data: { name, description, profile: importProfile.name, options }
        });
        return {
          type: "ADD_IMPORT",
          payload
        };
      },
      async consumeImport(id, options = {}, offset = null, limit = null) {
        const queryArgs = {};
        if (offset !== null) {
          queryArgs["offset"] = offset;
        }
        if (limit !== null) {
          queryArgs["limit"] = limit;
        }
        const { log, callbacks = [], notConsumedSlices } = await (0, import_api_fetch.default)({
          path: import_url.default.addQueryArgs(
            `${settings.base_uri}/import/${id}/consume`,
            queryArgs
          ),
          method: "POST",
          data: { options }
        });
        const postConsumeCallbacks = callbacks.map(
          (callback) => (0, import_api_fetch.default)({
            path: `${settings.base_uri}/${callback.path}`,
            method: callback.method,
            data: callback.data
          }).catch((error) => {
            if (error.code === "fetch_error") {
              log.push({
                type: "warning",
                message: `Ignore post consume callback(='${callback.path}') response : server side timed out(data=${JSON.stringify(callback.data)})`,
                cause: []
              });
              return Promise.resolve();
            }
          })
        );
        await Promise.all(postConsumeCallbacks);
        debug("consumeImport(%o, %o, %s, %o).log=\n%o", id, JSON.stringify(options), offset, limit, log);
        return {
          type: "",
          payload: { log, notConsumedSlices }
        };
      },
      setImports(exports) {
        return {
          type: "SET_IMPORTS",
          payload: exports
        };
      },
      async updateImport(id, data2) {
        const updatedImport = await (0, import_api_fetch.default)({
          path: `${DEFAULT_STATE.settings.base_uri}/import/${id}`,
          method: "PATCH",
          data: data2
        });
        return {
          type: "UPDATE_IMPORT",
          payload: updatedImport
        };
      },
      async deleteImport(id) {
        const deletedImport = await (0, import_api_fetch.default)({
          path: `${settings.base_uri}/import/${id}`,
          method: "DELETE"
        });
        return {
          type: "DELETE_IMPORT",
          payload: id
        };
      }
    };
    const selectors = {
      getExportProfile(state, name) {
        return state.exportProfiles.find((_) => _.name === name);
      },
      getExportProfiles(state) {
        return state.exportProfiles;
      },
      getExport(state, id) {
        return state.exports.find((_) => _.id === id);
      },
      getExports(state) {
        return state.exports;
      },
      getImportProfile(state, name) {
        return state.importProfiles.find((_) => _.name === name);
      },
      getImportProfiles(state) {
        return state.importProfiles;
      },
      getImport(state, id) {
        return state.imports.find((_) => _.id === id);
      },
      getImports(state) {
        return state.imports;
      },
      getSettings(state) {
        return state.settings;
      }
    };
    const store = import_data.default.createReduxStore(KEY, {
      __experimentalUseThunks: true,
      reducer(state = DEFAULT_STATE, { type, payload }) {
        switch (type) {
          case "ADD_EXPORT": {
            return {
              ...state,
              exports: [payload, ...state.exports]
            };
          }
          case "UPDATE_EXPORT": {
            const indexOfExport = state.exports.findIndex(
              (_) => _.id === payload.id
            );
            if (indexOfExport === -1) {
              debug("Export(id=%s) is unknown", payload.id);
            }
            state.exports.splice(indexOfExport, 1, payload);
            return {
              ...state,
              exports: [...state.exports]
            };
          }
          case "DELETE_EXPORT": {
            const indexOfExport = state.exports.findIndex(
              (_) => _.id === payload
            );
            if (indexOfExport === -1) {
              debug("Export(id=%s) is unknown", payload);
            }
            state.exports.splice(indexOfExport, 1);
            return {
              ...state,
              exports: [...state.exports]
            };
          }
          case "SET_EXPORTS": {
            return {
              ...state,
              exports: [...payload]
            };
          }
          case "SET_EXPORTPROFILES": {
            return {
              ...state,
              exportProfiles: [...payload].sort(
                (l, r) => l.name.localeCompare(r.name)
              )
            };
          }
          case "ADD_IMPORT": {
            return {
              ...state,
              imports: [payload, ...state.imports]
            };
          }
          case "UPDATE_IMPORT": {
            const indexOfExport = state.imports.findIndex(
              (_) => _.id === payload.id
            );
            if (indexOfExport === -1) {
              debug("Export(id=%s) is unknown", payload.id);
            }
            state.imports.splice(indexOfExport, 1, payload);
            return {
              ...state,
              imports: [...state.imports]
            };
          }
          case "DELETE_IMPORT": {
            const indexOfExport = state.imports.findIndex(
              (_) => _.id === payload
            );
            if (indexOfExport === -1) {
              debug("Export(id=%s) is unknown", payload);
            }
            state.imports.splice(indexOfExport, 1);
            return {
              ...state,
              imports: [...state.imports]
            };
          }
          case "SET_IMPORTS": {
            return {
              ...state,
              imports: [...payload]
            };
          }
          case "SET_IMPORTPROFILES": {
            return {
              ...state,
              importProfiles: [...payload].sort(
                (l, r) => l.name.localeCompare(r.name)
              )
            };
          }
        }
        return state;
      },
      actions,
      selectors,
      resolvers: {
        async getExportProfiles() {
          const payload = await (0, import_api_fetch.default)({
            path: `${base_uri}/export/profile`
          });
          return {
            type: "SET_EXPORTPROFILES",
            payload
          };
        },
        async getExports() {
          const payload = await (0, import_api_fetch.default)({
            path: `${base_uri}/export`
          });
          return {
            type: "SET_EXPORTS",
            payload
          };
        },
        async getImportProfiles() {
          const payload = await (0, import_api_fetch.default)({
            path: `${base_uri}/import/profile`
          });
          return {
            type: "SET_IMPORTPROFILES",
            payload
          };
        },
        async getImports() {
          const payload = await (0, import_api_fetch.default)({
            path: `${base_uri}/import`
          });
          return {
            type: "SET_IMPORTS",
            payload
          };
        }
      }
    });
    import_data.default.register(store);
  }
  return __toCommonJS(wp_impex_store_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkB3b3JkcHJlc3MvZGF0YSIsICJjbTRhbGwtd3AtYnVuZGxlLXdvcmRwcmVzcy1wbHVnaW46QHdvcmRwcmVzcy9hcGktZmV0Y2giLCAiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkB3b3JkcHJlc3MvdXJsIiwgImNtNGFsbC13cC1idW5kbGUtd29yZHByZXNzLXBsdWdpbjpAY200YWxsLWltcGV4L2RlYnVnIiwgImNtNGFsbC13cC1idW5kbGUtd29yZHByZXNzLXBsdWdpbjpAd29yZHByZXNzL2kxOG4iLCAiLi4vc3JjL3dwLmltcGV4LnN0b3JlLm1qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZGF0YTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuYXBpRmV0Y2g7IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLnVybDsiLCAibW9kdWxlLmV4cG9ydHMgPSB3cC5pbXBleC5kZWJ1ZzsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuaTE4bjsiLCAiaW1wb3J0IGRhdGEgZnJvbSBcIkB3b3JkcHJlc3MvZGF0YVwiO1xuaW1wb3J0IGFwaUZldGNoIGZyb20gXCJAd29yZHByZXNzL2FwaS1mZXRjaFwiO1xuaW1wb3J0IHVybCBmcm9tIFwiQHdvcmRwcmVzcy91cmxcIjtcbmltcG9ydCBEZWJ1ZyBmcm9tIFwiQGNtNGFsbC1pbXBleC9kZWJ1Z1wiO1xuaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tIFwiQHdvcmRwcmVzcy9pMThuXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcuZGVmYXVsdChcIndwLmltcGV4LnN0b3JlXCIpO1xuZGVidWcoXCJsb2FkZWRcIik7XG5cbmNvbnN0IEtFWSA9ICdjbTRhbGwvaW1wZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcbiAgY29uc3QgeyBuYW1lc3BhY2UsIGJhc2VfdXJpLCBzaXRlX3VybCB9ID0gc2V0dGluZ3M7XG4gIGNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XG4gICAgc2V0dGluZ3MsXG4gICAgaW1wb3J0czogW10sXG4gICAgZXhwb3J0czogW10sXG4gICAgaW1wb3J0UHJvZmlsZXM6IFtdLFxuICAgIGV4cG9ydFByb2ZpbGVzOiBbXSxcbiAgfTtcblxuICBjb25zdCBkaXNjb3ZlcnkgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgcGF0aDogXCIvXCIsXG4gIH0pO1xuXG4gIGlmICghZGlzY292ZXJ5Lm5hbWVzcGFjZXMuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgIHRocm93IGByZXN0IGRpc2NvdmVyeSBkb2Vzbid0IHByb3ZpZGUgZXhwZWN0ZWQgaW1wZXggcmVzdCBuYW1lc3BhY2UoPSR7bmFtZXNwYWNlfSlgO1xuICB9XG5cbiAgaWYgKCFkaXNjb3Zlcnkucm91dGVzW2Jhc2VfdXJpXSkge1xuICAgIHRocm93IGByZXN0IGRpc2NvdmVyeSBkb2Vzbid0IHByb3ZpZGUgZXhwZWN0ZWQgaW1wZXggcmVzdCByb3V0ZSAoPSR7YmFzZV91cml9KWA7XG4gIH1cblxuICBjb25zdCBhY3Rpb25zID0ge1xuICAgIC8vIHRoaXMgaXMgYSByZWR1eCB0aHVuayAoc2VlIGh0dHBzOi8vbWFrZS53b3JkcHJlc3Mub3JnL2NvcmUvMjAyMS8xMC8yOS90aHVua3MtaW4tZ3V0ZW5iZXJnLylcbiAgICBjcmVhdGVBbmRVcGxvYWRDb25zdW1lSW1wb3J0IDogKGltcG9ydFByb2ZpbGUsIGltcG9ydE9wdGlvbnMsIHNjcmVlbkNvbnRleHQpID0+XG4gICAgICBhc3luYyBmdW5jdGlvbiogKHsgZGlzcGF0Y2gsIHJlZ2lzdHJ5LCByZXNvbHZlU2VsZWN0LCBzZWxlY3QgfSkge1xuICAgICAgICBkZWJ1Zyh7aW1wb3J0UHJvZmlsZSwgaW1wb3J0T3B0aW9uc30pO1xuXG4gICAgICAgIGxldCBpbXBvcnREaXJIYW5kbGUgPSBudWxsO1xuICAgICAgICAvLyBzaG93RGlyZWN0b3J5UGlja2VyIHdpbGwgdGhyb3cgYSBET01FeGNlcHRpb24gaW4gY2FzZSB0aGUgdXNlciBwcmVzc2VkIGNhbmNlbFxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHNlZSBodHRwczovL3dlYi5kZXYvZmlsZS1zeXN0ZW0tYWNjZXNzL1xuICAgICAgICAgIGltcG9ydERpckhhbmRsZSA9IGF3YWl0IHdpbmRvdy5zaG93RGlyZWN0b3J5UGlja2VyKHtcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gc3VnZ2VzdCBhIGRlZmF1bHQgc3RhcnQgZGlyZWN0b3J5IGJ5IHBhc3NpbmcgYSBzdGFydEluIHByb3BlcnR5IHRvIHRoZSBzaG93U2F2ZUZpbGVQaWNrZXJcbiAgICAgICAgICAgIHN0YXJ0SW46IFwiZG93bmxvYWRzXCIsXG4gICAgICAgICAgICBpZDogXCJpbXBleC1pbXBvcnQtZGlyXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHlpZWxkIHtcbiAgICAgICAgICB0eXBlOiBcInByb2dyZXNzXCIsXG4gICAgICAgICAgdGl0bGU6IF9fKFwiSW1wb3J0XCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgIG1lc3NhZ2U6IF9fKFwiQ3JlYXRpbmcgc25hcHNob3QgLi4uXCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRJbXBvcnQgPSAoYXdhaXQgZGlzcGF0Y2guY3JlYXRlSW1wb3J0KFxuICAgICAgICAgIGB0cmFuc2llbnQtaW1wb3J0LSR7d2luZG93LmNyeXB0by5yYW5kb21VVUlEKCl9YCxcbiAgICAgICAgICBgbWFjaGluZSBnZW5lcmF0ZWQgdHJhbnNpZW50IGV4cG9ydCBzbmFwc2hvdCBjcmVhdGVkIHVzaW5nIHByb2ZpbGUgJHtpbXBvcnRQcm9maWxlLm5hbWV9YCxcbiAgICAgICAgICBpbXBvcnRQcm9maWxlLCB7IH0pKVxuICAgICAgICAgIC5wYXlsb2FkO1xuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICB0eXBlOiBcInByb2dyZXNzXCIsXG4gICAgICAgICAgICB0aXRsZTogX18oXCJJbXBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgICBtZXNzYWdlOiBfXyhcIlVwbG9hZGluZyBzbGljZXMgLi4uXCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBzbGljZUZpbGVzID0gYXdhaXQgc2NyZWVuQ29udGV4dC5fZ2V0U2xpY2VGaWxlc1RvSW1wb3J0KGltcG9ydERpckhhbmRsZSk7XG5cbiAgICAgICAgICBjb25zdCBmaW5pc2hlZCA9IGF3YWl0IHNjcmVlbkNvbnRleHQuX3VwbG9hZFNsaWNlcyhjcmVhdGVkSW1wb3J0LCBzbGljZUZpbGVzKTtcblxuICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgIHR5cGU6IFwicHJvZ3Jlc3NcIixcbiAgICAgICAgICAgIHRpdGxlOiBfXyhcIkltcG9ydFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IF9fKFwiSW1wb3J0aW5nIHNsaWNlcyAuLi5cIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgfTtcblxuXG4gICAgICAgICAgYXdhaXQgZGlzcGF0Y2guY29uc3VtZUltcG9ydChcbiAgICAgICAgICAgIGNyZWF0ZWRJbXBvcnQuaWQsXG4gICAgICAgICAgICBpbXBvcnRPcHRpb25zLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgYXdhaXQgKHlpZWxkIHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgICAgICAgdGl0bGU6IF9fKFwiSW1wb3J0IGNvbXBsZXRlZFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IF9fKFwiU3VjY2Vzc2Z1bGx5IGZpbmlzaGVkIGltcG9ydC5cIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYoY3JlYXRlZEltcG9ydCkge1xuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2guZGVsZXRlSW1wb3J0KGNyZWF0ZWRJbXBvcnQuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICxcbiAgICAvLyB0aGlzIGlzIGEgcmVkdXggdGh1bmsgKHNlZSBodHRwczovL21ha2Uud29yZHByZXNzLm9yZy9jb3JlLzIwMjEvMTAvMjkvdGh1bmtzLWluLWd1dGVuYmVyZy8pXG4gICAgY3JlYXRlQW5kRG93bmxvYWRFeHBvcnQ6IChleHBvcnRQcm9maWxlLCBzY3JlZW5Db250ZXh0KSA9PlxuICAgICAgYXN5bmMgZnVuY3Rpb24qICh7IGRpc3BhdGNoLCByZWdpc3RyeSwgcmVzb2x2ZVNlbGVjdCwgc2VsZWN0IH0pIHtcbiAgICAgICAgbGV0IGV4cG9ydHNEaXJIYW5kbGUgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHNob3dEaXJlY3RvcnlQaWNrZXIgd2lsbCB0aHJvdyBhIERPTUV4Y2VwdGlvbiBpbiBjYXNlIHRoZSB1c2VyIHByZXNzZWQgY2FuY2VsXG4gICAgICAgICAgLy8gc2VlIGh0dHBzOi8vd2ViLmRldi9maWxlLXN5c3RlbS1hY2Nlc3MvXG4gICAgICAgICAgLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cvc2hvd0RpcmVjdG9yeVBpY2tlclxuICAgICAgICAgIGV4cG9ydHNEaXJIYW5kbGUgPSBhd2FpdCB3aW5kb3cuc2hvd0RpcmVjdG9yeVBpY2tlcih7XG4gICAgICAgICAgICBzdGFydEluOiBcImRvd25sb2Fkc1wiLFxuICAgICAgICAgICAgbW9kZTogXCJyZWFkd3JpdGVcIixcbiAgICAgICAgICAgIGlkOiBcImltcGV4LWV4cG9ydC1kaXJcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9leHBvcnRGb2xkZXJOYW1lID0gc2NyZWVuQ29udGV4dC5ub3JtYWxpemVGaWxlbmFtZShcbiAgICAgICAgICBgJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9LSR7XG4gICAgICAgICAgICBleHBvcnRQcm9maWxlLm5hbWVcbiAgICAgICAgICB9LSR7c2NyZWVuQ29udGV4dC5jdXJyZW50RGF0ZVN0cmluZygpfWBcbiAgICAgICAgKTtcblxuICAgICAgICBfZXhwb3J0Rm9sZGVyTmFtZSA9XG4gICAgICAgICAgcHJvbXB0KFxuICAgICAgICAgICAgXCJFbnRlciBuYW1lIG9mIHRoZSBleHBvcnQgKG1heCAzMiBjaGFyYWN0ZXJzKTpcIixcbiAgICAgICAgICAgIF9leHBvcnRGb2xkZXJOYW1lXG4gICAgICAgICAgKTsgLy8gPz8gX2V4cG9ydEZvbGRlck5hbWU7XG5cbiAgICAgICAgLy8gYWJvcnQgaWYgdXNlciBwcmVzc2VkIGNhbmNlbFxuICAgICAgICBpZighX2V4cG9ydEZvbGRlck5hbWUpIHtcbiAgICAgICAgICBhd2FpdCAoeWllbGQge1xuICAgICAgICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICAgICAgICB0aXRsZTogX18oXCJFeHBvcnQgYWJvcnRlZFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IF9fKFwiWW91IGNhbmNlbGVkIHRoZSBleHBvcnQgb3IgZW50ZXJlZCBhbiBpbnZhbGlkIGV4cG9ydCBuYW1lXCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgX2V4cG9ydEZvbGRlck5hbWUuc3Vic3RyaW5nKDAsIDMyKTtcblxuICAgICAgICBtYXRjaGluZ0V4aXN0aW5nRXhwb3J0cyA9IFtdO1xuICAgICAgICBmb3IgYXdhaXQgKGxldCBleHBvcnRzRGlyQ2hpbGRIYW5kbGUgb2YgZXhwb3J0c0RpckhhbmRsZS52YWx1ZXMoKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV4cG9ydHNEaXJDaGlsZEhhbmRsZS5raW5kID09PSBcImRpcmVjdG9yeVwiICYmXG4gICAgICAgICAgICBleHBvcnRzRGlyQ2hpbGRIYW5kbGUubmFtZS5zdGFydHNXaXRoKF9leHBvcnRGb2xkZXJOYW1lKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbWF0Y2hpbmdFeGlzdGluZ0V4cG9ydHMucHVzaChleHBvcnRzRGlyQ2hpbGRIYW5kbGUubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICovXG5cbiAgICAgICAgLy8gZW5zdXJlIGRpcmVjdG9yeSBkb2VzIG5vdCBleGlzdFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGV4cG9ydHNEaXJIYW5kbGUuZ2V0RGlyZWN0b3J5SGFuZGxlKFxuICAgICAgICAgICAgX2V4cG9ydEZvbGRlck5hbWUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBFeHBvcnQgZm9sZGVyICR7X2V4cG9ydEZvbGRlck5hbWV9IGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgcmVtb3ZlL3JlbmFtZSBpdCBhbmQgY29udGludWUuXFxuKCR7ZXgubWVzc2FnZX0pYFxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICBjb25zdCBleHBvcnREaXJIYW5kbGUgPSBhd2FpdCBleHBvcnRzRGlySGFuZGxlLmdldERpcmVjdG9yeUhhbmRsZShcbiAgICAgICAgICBfZXhwb3J0Rm9sZGVyTmFtZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjcmVhdGU6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGRlYnVnKHsgZXhwb3J0RGlySGFuZGxlIH0pO1xuXG4gICAgICAgIGxldCBjcmVhdGVkRXhwb3J0ID0gbnVsbDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIGNvbnN0IGV4cG9ydHMgPSBzZWxlY3QuZ2V0RXhwb3J0cygpO1xuICAgICAgICAgIC8vIGRlYnVnKHsgZXhwb3J0cyB9KTtcblxuICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgIHR5cGU6IFwicHJvZ3Jlc3NcIixcbiAgICAgICAgICAgIHRpdGxlOiBfXyhcIkV4cG9ydFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IF9fKFwiQ3JlYXRpbmcgc25hcHNob3RcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNyZWF0ZWRFeHBvcnQgPSAoYXdhaXQgZGlzcGF0Y2guY3JlYXRlRXhwb3J0KFxuICAgICAgICAgICAgZXhwb3J0UHJvZmlsZSxcbiAgICAgICAgICAgIGB0cmFuc2llbnQtZXhwb3J0LSR7d2luZG93LmNyeXB0by5yYW5kb21VVUlEKCl9YCxcbiAgICAgICAgICAgIGBtYWNoaW5lIGdlbmVyYXRlZCB0cmFuc2llbnQgc25hcHNob3QgY3JlYXRlZCB1c2luZyBwcm9maWxlICR7ZXhwb3J0UHJvZmlsZS5uYW1lfWBcbiAgICAgICAgICAgIC8vIGNvbnN0IGRhdGUgPSBzY3JlZW5Db250ZXh0LmN1cnJlbnREYXRlU3RyaW5nKCk7XG4gICAgICAgICAgICAvLyBjb25zdCBuYW1lID0gYCR7c2l0ZV91cmwuaG9zdG5hbWV9LSR7ZXhwb3J0UHJvZmlsZS5uYW1lfS0ke2RhdGV9YDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlc2NyaXB0aW9uID0gYEV4cG9ydCAnJHtleHBvcnRQcm9maWxlLm5hbWV9JyBjcmVhdGVkIGJ5IHVzZXIgJyR7Y3VycmVudFVzZXIubmFtZX0nIGF0ICR7ZGF0ZX1gO1xuICAgICAgICAgICkpLnBheWxvYWQ7XG5cbiAgICAgICAgICAvLyBjb25zdCBleHBvcnRzMiA9IHNlbGVjdC5nZXRFeHBvcnRzKCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXhwb3J0czIpO1xuXG4gICAgICAgICAgY29uc3QgcGF0aCA9IGAke3NldHRpbmdzLmJhc2VfdXJpfS9leHBvcnQvJHtjcmVhdGVkRXhwb3J0LmlkfS9zbGljZWA7XG5cbiAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICB0eXBlOiBcInByb2dyZXNzXCIsXG4gICAgICAgICAgICB0aXRsZTogX18oXCJEb3dubG9hZGluZyBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IF9fKFwiQ3JlYXRpbmcgc25hcHNob3RcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IGluaXRpYWxSZXNwb25zZSA9IGF3YWl0IGFwaUZldGNoKHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAvLyBwYXJzZTogZmFsc2UgaXMgbmVlZGVkIHRvIGdldGEgYWNjZXNzIHRvIHRoZSBoZWFkZXJzXG4gICAgICAgICAgICBwYXJzZTogZmFsc2UsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBjb25zdCB4X3dwX3RvdGFsID0gTnVtYmVyLnBhcnNlSW50KFxuICAgICAgICAgIC8vICAgaW5pdGlhbFJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiWC1XUC1Ub3RhbFwiKSxcbiAgICAgICAgICAvLyAgIDEwXG4gICAgICAgICAgLy8gKTtcbiAgICAgICAgICBjb25zdCB4X3dwX3RvdGFsX3BhZ2VzID0gTnVtYmVyLnBhcnNlSW50KFxuICAgICAgICAgICAgaW5pdGlhbFJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiWC1XUC1Ub3RhbFBhZ2VzXCIpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IHNsaWNlQ2h1bmtzID0gW1xuICAgICAgICAgICAgc2NyZWVuQ29udGV4dC5zYXZlU2xpY2VzQ2h1bmsoZXhwb3J0RGlySGFuZGxlLCBpbml0aWFsUmVzcG9uc2UuanNvbigpLCAxKSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIGZvciAobGV0IGNodW5rID0gMjsgY2h1bmsgPD0geF93cF90b3RhbF9wYWdlczsgY2h1bmsrKykge1xuICAgICAgICAgICAgc2xpY2VDaHVua3MucHVzaChcbiAgICAgICAgICAgICAgc2NyZWVuQ29udGV4dC5zYXZlU2xpY2VzQ2h1bmsoXG4gICAgICAgICAgICAgICAgZXhwb3J0RGlySGFuZGxlLFxuICAgICAgICAgICAgICAgIGFwaUZldGNoKHtcbiAgICAgICAgICAgICAgICAgIHBhdGg6IHVybC5hZGRRdWVyeUFyZ3MocGF0aCwgeyBwYWdlOiBjaHVuayB9KSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjaHVua1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHNsaWNlQ2h1bmtzKTtcblxuICAgICAgICAgIGF3YWl0ICh5aWVsZCB7XG4gICAgICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgICAgIHRpdGxlOiBfXyhcIkV4cG9ydCBjb21wbGV0ZWRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgICBtZXNzYWdlOiBfXyhcIlN1Y2Nlc3NmdWxseSBmaW5pc2hlZCBleHBvcnQuXCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuXG4gICAgICAgICAgLy8geWllbGQge1xuICAgICAgICAgIC8vICAgdHlwZTogXCJwcm9ncmVzc1wiLFxuICAgICAgICAgIC8vICAgdGl0bGU6IF9fKFwiRXhwb3J0XCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgIC8vICAgbWVzc2FnZTogX18oXCJEb3dubG9hZGluZyBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAvLyB9O1xuXG4gICAgICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuXG4gICAgICAgICAgLy8gdGhyb3cge1xuICAgICAgICAgIC8vICAgdGl0bGU6IF9fKFwiRXhwb3J0IGZhaWxlZFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAvLyAgIG1lc3NhZ2U6IF9fKFwiRXhwb3J0IGZhaWxlZCBieSBhYm9ydGlvblwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAvLyB9O1xuXG5cbiAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJIdXV1dXUgLSBzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcblxuICAgICAgICAgIC8vIHlpZWxkIHtcbiAgICAgICAgICAvLyAgIHR5cGU6IFwicHJvZ3Jlc3NcIixcbiAgICAgICAgICAvLyAgIHRpdGxlOiBfXyhcIkV4cG9ydFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAvLyAgIG1lc3NhZ2U6IF9fKFwiRG9uZVwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAvLyB9O1xuXG4gICAgICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmKGNyZWF0ZWRFeHBvcnQpIHtcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoLmRlbGV0ZUV4cG9ydChjcmVhdGVkRXhwb3J0LmlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgZXhwb3J0c0RpckhhbmRsZS5yZW1vdmVFbnRyeShleHBvcnREaXJIYW5kbGUubmFtZSwgeyByZWN1cnNpdmUgOiB0cnVlLCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICBhc3luYyBjcmVhdGVFeHBvcnQoZXhwb3J0UHJvZmlsZSwgbmFtZSA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIikge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGFwaUZldGNoKHtcbiAgICAgICAgcGF0aDogYCR7c2V0dGluZ3MuYmFzZV91cml9L2V4cG9ydGAsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IHsgcHJvZmlsZTogZXhwb3J0UHJvZmlsZS5uYW1lLCBuYW1lLCBkZXNjcmlwdGlvbiB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiQUREX0VYUE9SVFwiLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldEV4cG9ydHMoZXhwb3J0cykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJTRVRfRVhQT1JUU1wiLFxuICAgICAgICBwYXlsb2FkOiBleHBvcnRzLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFzeW5jIHVwZGF0ZUV4cG9ydChpZCwgZGF0YSkge1xuICAgICAgY29uc3QgdXBkYXRlZEV4cG9ydCA9IGF3YWl0IGFwaUZldGNoKHtcbiAgICAgICAgcGF0aDogYCR7REVGQVVMVF9TVEFURS5zZXR0aW5ncy5iYXNlX3VyaX0vZXhwb3J0LyR7aWR9YCxcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGRhdGEsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJVUERBVEVfRVhQT1JUXCIsXG4gICAgICAgIHBheWxvYWQ6IHVwZGF0ZWRFeHBvcnQsXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXN5bmMgZGVsZXRlRXhwb3J0KGlkKSB7XG4gICAgICBjb25zdCBkZWxldGVkRXhwb3J0ID0gYXdhaXQgYXBpRmV0Y2goe1xuICAgICAgICBwYXRoOiBgJHtzZXR0aW5ncy5iYXNlX3VyaX0vZXhwb3J0LyR7aWR9YCxcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiREVMRVRFX0VYUE9SVFwiLFxuICAgICAgICBwYXlsb2FkOiBpZCxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhc3luYyBjcmVhdGVJbXBvcnQobmFtZSwgZGVzY3JpcHRpb24sIGltcG9ydFByb2ZpbGUsIG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgICAgIHBhdGg6IGAke3NldHRpbmdzLmJhc2VfdXJpfS9pbXBvcnRgLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7IG5hbWUsIGRlc2NyaXB0aW9uLCBwcm9maWxlOiBpbXBvcnRQcm9maWxlLm5hbWUsIG9wdGlvbnMgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIkFERF9JTVBPUlRcIixcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhc3luYyBjb25zdW1lSW1wb3J0KGlkLCBvcHRpb25zID0ge30sIG9mZnNldCA9IG51bGwsIGxpbWl0ID0gbnVsbCkge1xuICAgICAgY29uc3QgcXVlcnlBcmdzID0ge307XG5cbiAgICAgIGlmIChvZmZzZXQgIT09IG51bGwpIHtcbiAgICAgICAgcXVlcnlBcmdzW1wib2Zmc2V0XCJdID0gb2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAobGltaXQgIT09IG51bGwpIHtcbiAgICAgICAgcXVlcnlBcmdzW1wibGltaXRcIl0gPSBsaW1pdDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBsb2csIGNhbGxiYWNrcyA9IFtdLCBub3RDb25zdW1lZFNsaWNlcyB9ID0gYXdhaXQgYXBpRmV0Y2goe1xuICAgICAgICBwYXRoOiB1cmwuYWRkUXVlcnlBcmdzKFxuICAgICAgICAgIGAke3NldHRpbmdzLmJhc2VfdXJpfS9pbXBvcnQvJHtpZH0vY29uc3VtZWAsXG4gICAgICAgICAgcXVlcnlBcmdzXG4gICAgICAgICksXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IHsgb3B0aW9ucyB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHByb2Nlc3MgcmV0dXJuZWQgY2FsbGJhY2tzXG4gICAgICBjb25zdCBwb3N0Q29uc3VtZUNhbGxiYWNrcyA9IGNhbGxiYWNrcy5tYXAoXG4gICAgICAgIGNhbGxiYWNrID0+IGFwaUZldGNoKHtcbiAgICAgICAgICBwYXRoIDogYCR7c2V0dGluZ3MuYmFzZV91cml9LyR7Y2FsbGJhY2sucGF0aH1gLFxuICAgICAgICAgIG1ldGhvZDogY2FsbGJhY2subWV0aG9kLFxuICAgICAgICAgIGRhdGE6IGNhbGxiYWNrLmRhdGEsXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAvLyBzaWxlbnRseSBpZ25vcmUgZXJyb3JzIGZyb20gdGltZWQgb3V0IG1ldGFkYXRhIHVwZGF0ZXNcbiAgICAgICAgICBpZihlcnJvci5jb2RlPT09J2ZldGNoX2Vycm9yJykge1xuICAgICAgICAgICAgbG9nLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICAgIG1lc3NhZ2UgOiBgSWdub3JlIHBvc3QgY29uc3VtZSBjYWxsYmFjayg9JyR7Y2FsbGJhY2sucGF0aH0nKSByZXNwb25zZSA6IHNlcnZlciBzaWRlIHRpbWVkIG91dChkYXRhPSR7SlNPTi5zdHJpbmdpZnkoY2FsbGJhY2suZGF0YSl9KWAsXG4gICAgICAgICAgICAgIGNhdXNlIDogW10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChwb3N0Q29uc3VtZUNhbGxiYWNrcyk7XG5cbiAgICAgIGRlYnVnKFwiY29uc3VtZUltcG9ydCglbywgJW8sICVzLCAlbykubG9nPVxcbiVvXCIsIGlkLCBKU09OLnN0cmluZ2lmeShvcHRpb25zKSwgb2Zmc2V0LCBsaW1pdCwgbG9nKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJcIixcbiAgICAgICAgcGF5bG9hZDogeyBsb2csIG5vdENvbnN1bWVkU2xpY2VzIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0SW1wb3J0cyhleHBvcnRzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIlNFVF9JTVBPUlRTXCIsXG4gICAgICAgIHBheWxvYWQ6IGV4cG9ydHMsXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXN5bmMgdXBkYXRlSW1wb3J0KGlkLCBkYXRhKSB7XG4gICAgICBjb25zdCB1cGRhdGVkSW1wb3J0ID0gYXdhaXQgYXBpRmV0Y2goe1xuICAgICAgICBwYXRoOiBgJHtERUZBVUxUX1NUQVRFLnNldHRpbmdzLmJhc2VfdXJpfS9pbXBvcnQvJHtpZH1gLFxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgZGF0YSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIlVQREFURV9JTVBPUlRcIixcbiAgICAgICAgcGF5bG9hZDogdXBkYXRlZEltcG9ydCxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhc3luYyBkZWxldGVJbXBvcnQoaWQpIHtcbiAgICAgIGNvbnN0IGRlbGV0ZWRJbXBvcnQgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgICAgIHBhdGg6IGAke3NldHRpbmdzLmJhc2VfdXJpfS9pbXBvcnQvJHtpZH1gLFxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJERUxFVEVfSU1QT1JUXCIsXG4gICAgICAgIHBheWxvYWQ6IGlkLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICBnZXRFeHBvcnRQcm9maWxlKHN0YXRlLCBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGUuZXhwb3J0UHJvZmlsZXMuZmluZCgoXykgPT4gXy5uYW1lID09PSBuYW1lKTtcbiAgICB9LFxuXG4gICAgZ2V0RXhwb3J0UHJvZmlsZXMoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5leHBvcnRQcm9maWxlcztcbiAgICB9LFxuXG4gICAgZ2V0RXhwb3J0KHN0YXRlLCBpZCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmV4cG9ydHMuZmluZCgoXykgPT4gXy5pZCA9PT0gaWQpO1xuICAgIH0sXG5cbiAgICBnZXRFeHBvcnRzKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuZXhwb3J0cztcbiAgICB9LFxuXG4gICAgZ2V0SW1wb3J0UHJvZmlsZShzdGF0ZSwgbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmltcG9ydFByb2ZpbGVzLmZpbmQoKF8pID0+IF8ubmFtZSA9PT0gbmFtZSk7XG4gICAgfSxcblxuICAgIGdldEltcG9ydFByb2ZpbGVzKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuaW1wb3J0UHJvZmlsZXM7XG4gICAgfSxcblxuICAgIGdldEltcG9ydChzdGF0ZSwgaWQpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5pbXBvcnRzLmZpbmQoKF8pID0+IF8uaWQgPT09IGlkKTtcbiAgICB9LFxuXG4gICAgZ2V0SW1wb3J0cyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmltcG9ydHM7XG4gICAgfSxcblxuICAgIGdldFNldHRpbmdzKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuc2V0dGluZ3M7XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBzdG9yZSA9IGRhdGEuY3JlYXRlUmVkdXhTdG9yZShLRVksIHtcbiAgICBfX2V4cGVyaW1lbnRhbFVzZVRodW5rczogdHJ1ZSxcbiAgICByZWR1Y2VyKHN0YXRlID0gREVGQVVMVF9TVEFURSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiQUREX0VYUE9SVFwiOiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZXhwb3J0czogW3BheWxvYWQsIC4uLnN0YXRlLmV4cG9ydHNdLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIlVQREFURV9FWFBPUlRcIjoge1xuICAgICAgICAgIGNvbnN0IGluZGV4T2ZFeHBvcnQgPSBzdGF0ZS5leHBvcnRzLmZpbmRJbmRleChcbiAgICAgICAgICAgIChfKSA9PiBfLmlkID09PSBwYXlsb2FkLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaW5kZXhPZkV4cG9ydCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiRXhwb3J0KGlkPSVzKSBpcyB1bmtub3duXCIsIHBheWxvYWQuaWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXRlLmV4cG9ydHMuc3BsaWNlKGluZGV4T2ZFeHBvcnQsIDEsIHBheWxvYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZXhwb3J0czogWy4uLnN0YXRlLmV4cG9ydHNdLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIkRFTEVURV9FWFBPUlRcIjoge1xuICAgICAgICAgIGNvbnN0IGluZGV4T2ZFeHBvcnQgPSBzdGF0ZS5leHBvcnRzLmZpbmRJbmRleChcbiAgICAgICAgICAgIChfKSA9PiBfLmlkID09PSBwYXlsb2FkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaW5kZXhPZkV4cG9ydCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiRXhwb3J0KGlkPSVzKSBpcyB1bmtub3duXCIsIHBheWxvYWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXRlLmV4cG9ydHMuc3BsaWNlKGluZGV4T2ZFeHBvcnQsIDEpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZXhwb3J0czogWy4uLnN0YXRlLmV4cG9ydHNdLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIlNFVF9FWFBPUlRTXCI6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBleHBvcnRzOiBbLi4ucGF5bG9hZF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiU0VUX0VYUE9SVFBST0ZJTEVTXCI6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBleHBvcnRQcm9maWxlczogWy4uLnBheWxvYWRdLnNvcnQoKGwsIHIpID0+XG4gICAgICAgICAgICAgIGwubmFtZS5sb2NhbGVDb21wYXJlKHIubmFtZSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgXCJBRERfSU1QT1JUXCI6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpbXBvcnRzOiBbcGF5bG9hZCwgLi4uc3RhdGUuaW1wb3J0c10sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiVVBEQVRFX0lNUE9SVFwiOiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhPZkV4cG9ydCA9IHN0YXRlLmltcG9ydHMuZmluZEluZGV4KFxuICAgICAgICAgICAgKF8pID0+IF8uaWQgPT09IHBheWxvYWQuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpbmRleE9mRXhwb3J0ID09PSAtMSkge1xuICAgICAgICAgICAgZGVidWcoXCJFeHBvcnQoaWQ9JXMpIGlzIHVua25vd25cIiwgcGF5bG9hZC5pZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhdGUuaW1wb3J0cy5zcGxpY2UoaW5kZXhPZkV4cG9ydCwgMSwgcGF5bG9hZCk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpbXBvcnRzOiBbLi4uc3RhdGUuaW1wb3J0c10sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiREVMRVRFX0lNUE9SVFwiOiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhPZkV4cG9ydCA9IHN0YXRlLmltcG9ydHMuZmluZEluZGV4KFxuICAgICAgICAgICAgKF8pID0+IF8uaWQgPT09IHBheWxvYWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpbmRleE9mRXhwb3J0ID09PSAtMSkge1xuICAgICAgICAgICAgZGVidWcoXCJFeHBvcnQoaWQ9JXMpIGlzIHVua25vd25cIiwgcGF5bG9hZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhdGUuaW1wb3J0cy5zcGxpY2UoaW5kZXhPZkV4cG9ydCwgMSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpbXBvcnRzOiBbLi4uc3RhdGUuaW1wb3J0c10sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiU0VUX0lNUE9SVFNcIjoge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGltcG9ydHM6IFsuLi5wYXlsb2FkXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJTRVRfSU1QT1JUUFJPRklMRVNcIjoge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGltcG9ydFByb2ZpbGVzOiBbLi4ucGF5bG9hZF0uc29ydCgobCwgcikgPT5cbiAgICAgICAgICAgICAgbC5uYW1lLmxvY2FsZUNvbXBhcmUoci5uYW1lKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuICAgIGFjdGlvbnMsXG4gICAgc2VsZWN0b3JzLFxuICAgIHJlc29sdmVyczoge1xuICAgICAgYXN5bmMgZ2V0RXhwb3J0UHJvZmlsZXMoKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgICAgICAgcGF0aDogYCR7YmFzZV91cml9L2V4cG9ydC9wcm9maWxlYCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogXCJTRVRfRVhQT1JUUFJPRklMRVNcIixcbiAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldEV4cG9ydHMoKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgICAgICAgcGF0aDogYCR7YmFzZV91cml9L2V4cG9ydGAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IFwiU0VUX0VYUE9SVFNcIixcbiAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldEltcG9ydFByb2ZpbGVzKCkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXBpRmV0Y2goe1xuICAgICAgICAgIHBhdGg6IGAke2Jhc2VfdXJpfS9pbXBvcnQvcHJvZmlsZWAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IFwiU0VUX0lNUE9SVFBST0ZJTEVTXCIsXG4gICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBnZXRJbXBvcnRzKCkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXBpRmV0Y2goe1xuICAgICAgICAgIHBhdGg6IGAke2Jhc2VfdXJpfS9pbXBvcnRgLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9JTVBPUlRTXCIsXG4gICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgZGF0YS5yZWdpc3RlcihzdG9yZSk7XG59XG5cbmV4cG9ydCB7IEtFWSB9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHO0FBQUE7QUFBQTs7O0FDQTNCO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHO0FBQUE7QUFBQTs7O0FDQTNCO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHO0FBQUE7QUFBQTs7O0FDQTNCO0FBQUE7QUFBQSxhQUFPLFVBQVUsR0FBRyxNQUFNO0FBQUE7QUFBQTs7O0FDQTFCO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHO0FBQUE7QUFBQTs7O0FDQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBaUI7QUFDakIseUJBQXFCO0FBQ3JCLG1CQUFnQjtBQUNoQixxQkFBa0I7QUFDbEIsb0JBQTRCO0FBRTVCLE1BQU0sUUFBUSxhQUFBQSxRQUFNLFFBQVEsZ0JBQWdCO0FBQzVDLFFBQU0sUUFBUTtBQUVkLE1BQU0sTUFBTTtBQUVaLGlCQUFPLHVCQUF3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QUNMLEdBQUc7QUFBQSxjQUNILFNBQVMsQ0FBQyxHQUFHLE1BQU0sT0FBTztBQUFBLFlBQzVCO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSyxlQUFlO0FBQ2xCLG1CQUFPO0FBQUEsY0FDTCxHQUFHO0FBQUEsY0FDSCxTQUFTLENBQUMsR0FBRyxPQUFPO0FBQUEsWUFDdEI7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLLHNCQUFzQjtBQUN6QixtQkFBTztBQUFBLGNBQ0wsR0FBRztBQUFBLGNBQ0gsZ0JBQWdCLENBQUMsR0FBRyxPQUFPLEVBQUU7QUFBQSxnQkFBSyxDQUFDLEdBQUcsTUFDcEMsRUFBRSxLQUFLLGNBQWMsRUFBRSxJQUFJO0FBQUEsY0FDN0I7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFFQSxlQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxNQUFNLG9CQUFvQjtBQUN4QixnQkFBTSxVQUFVLFVBQU0saUJBQUFGLFNBQVM7QUFBQSxZQUM3QixNQUFNLEdBQUcsUUFBUTtBQUFBLFVBQ25CLENBQUM7QUFDRCxpQkFBTztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ047QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsTUFBTSxhQUFhO0FBQ2pCLGdCQUFNLFVBQVUsVUFBTSxpQkFBQUEsU0FBUztBQUFBLFlBQzdCLE1BQU0sR0FBRyxRQUFRO0FBQUEsVUFDbkIsQ0FBQztBQUNELGlCQUFPO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxNQUFNLG9CQUFvQjtBQUN4QixnQkFBTSxVQUFVLFVBQU0saUJBQUFBLFNBQVM7QUFBQSxZQUM3QixNQUFNLEdBQUcsUUFBUTtBQUFBLFVBQ25CLENBQUM7QUFDRCxpQkFBTztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ047QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsTUFBTSxhQUFhO0FBQ2pCLGdCQUFNLFVBQVUsVUFBTSxpQkFBQUEsU0FBUztBQUFBLFlBQzdCLE1BQU0sR0FBRyxRQUFRO0FBQUEsVUFDbkIsQ0FBQztBQUNELGlCQUFPO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUVELGdCQUFBRSxRQUFLLFNBQVMsS0FBSztBQUFBLEVBQ3JCOyIsCiAgIm5hbWVzIjogWyJEZWJ1ZyIsICJhcGlGZXRjaCIsICJ1cmwiLCAiZGF0YSJdCn0K
