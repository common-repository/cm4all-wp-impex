var wp;
((wp ||= {}).impex ||= {}).dashboard = (() => {
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

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/element
  var require_element = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/element"(exports, module) {
      module.exports = window.wp.element;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/debug
  var require_debug = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/debug"(exports, module) {
      module.exports = wp.impex.debug;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/components
  var require_components = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/components"(exports, module) {
      module.exports = window.wp.components;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/data
  var require_data = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/data"(exports, module) {
      module.exports = window.wp.data;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/i18n
  var require_i18n = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/i18n"(exports, module) {
      module.exports = window.wp.i18n;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/store
  var require_store = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/store"(exports, module) {
      module.exports = wp.impex.store;
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

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/primitives
  var require_primitives = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/primitives"(exports, module) {
      module.exports = window.wp.primitives;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:React
  var require_React = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:React"(exports, module) {
      module.exports = window.React;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@wordpress/hooks
  var require_hooks = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@wordpress/hooks"(exports, module) {
      module.exports = window.wp.hooks;
    }
  });

  // cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/filters
  var require_filters = __commonJS({
    "cm4all-wp-bundle-wordpress-plugin:@cm4all-impex/filters"(exports, module) {
      module.exports = wp.impex.filters;
    }
  });

  // plugins/cm4all-wp-impex/src/wp.impex.dashboard.mjs
  var import_element13 = __toESM(require_element(), 1);
  var import_debug5 = __toESM(require_debug(), 1);

  // plugins/cm4all-wp-impex/src/components/screen.mjs
  var import_element12 = __toESM(require_element(), 1);
  var import_components7 = __toESM(require_components(), 1);
  var import_data7 = __toESM(require_data(), 1);
  var import_i18n6 = __toESM(require_i18n(), 1);
  var import_debug4 = __toESM(require_debug(), 1);
  var import_store6 = __toESM(require_store(), 1);

  // plugins/cm4all-wp-impex/src/components/export.mjs
  var import_element9 = __toESM(require_element(), 1);
  var import_components4 = __toESM(require_components(), 1);
  var import_api_fetch2 = __toESM(require_api_fetch(), 1);
  var import_url2 = __toESM(require_url(), 1);
  var import_data4 = __toESM(require_data(), 1);
  var import_i18n3 = __toESM(require_i18n(), 1);
  var import_debug2 = __toESM(require_debug(), 1);

  // node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js
  var import_element = __toESM(require_element());
  var import_primitives = __toESM(require_primitives());
  var cancelCircleFilled = (0, import_element.createElement)(import_primitives.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0, import_element.createElement)(import_primitives.Path, {
    d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L13.0607 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L12 13.0607L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L10.9393 12L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L12 10.9393L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
  }));
  var cancel_circle_filled_default = cancelCircleFilled;

  // node_modules/@wordpress/icons/build-module/library/cloud-upload.js
  var import_element2 = __toESM(require_element());
  var import_primitives2 = __toESM(require_primitives());
  var cloudUpload = (0, import_element2.createElement)(import_primitives2.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0, import_element2.createElement)(import_primitives2.Path, {
    d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"
  }));
  var cloud_upload_default = cloudUpload;

  // node_modules/@wordpress/icons/build-module/library/download.js
  var import_element3 = __toESM(require_element());
  var import_primitives3 = __toESM(require_primitives());
  var download = (0, import_element3.createElement)(import_primitives3.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0, import_element3.createElement)(import_primitives3.Path, {
    d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
  }));
  var download_default = download;

  // node_modules/@wordpress/icons/build-module/library/pencil.js
  var import_element4 = __toESM(require_element());
  var import_primitives4 = __toESM(require_primitives());
  var pencil = (0, import_element4.createElement)(import_primitives4.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0, import_element4.createElement)(import_primitives4.Path, {
    d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
  }));
  var pencil_default = pencil;

  // node_modules/@wordpress/icons/build-module/library/edit.js
  var edit_default = pencil_default;

  // node_modules/@wordpress/icons/build-module/library/upload.js
  var import_element5 = __toESM(require_element());
  var import_primitives5 = __toESM(require_primitives());
  var upload = (0, import_element5.createElement)(import_primitives5.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0, import_element5.createElement)(import_primitives5.Path, {
    d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
  }));
  var upload_default = upload;

  // plugins/cm4all-wp-impex/src/components/export-profile-selector.mjs
  var import_components = __toESM(require_components(), 1);
  var import_data = __toESM(require_data(), 1);
  var import_element6 = __toESM(require_element(), 1);
  var import_i18n = __toESM(require_i18n(), 1);
  var import_store = __toESM(require_store(), 1);
  function ExportProfileSelector({ value, onChange }) {
    const { exportProfiles } = import_data.default.useSelect((select) => {
      const store = select(import_store.default.KEY);
      return {
        exportProfiles: store.getExportProfiles()
      };
    });
    const exportProfileSelectRef = import_element6.default.useRef();
    const setExportProfile = (exportProfileName = null) => {
      const exportProfile = exportProfiles.find(
        (_) => _.name === exportProfileName
      );
      onChange(exportProfile);
      if (exportProfileSelectRef.current) {
        if (!exportProfile) {
          exportProfileSelectRef.current.selectedIndex = 0;
        }
        exportProfileSelectRef.current.title = exportProfile?.description || "";
      }
    };
    import_element6.default.useEffect(() => {
      setExportProfile(value?.name);
    }, [exportProfiles]);
    import_element6.default.useEffect(() => {
      for (const option of exportProfileSelectRef.current?.options ?? []) {
        if (!option.disabled) {
          option.title = exportProfiles.find((_) => _.name === option.value)?.description;
        }
      }
    }, [exportProfiles]);
    const options = [...exportProfiles];
    if (exportProfiles.length > 1) {
      options.unshift({
        name: exportProfiles.length ? (0, import_i18n.__)("Select an export profile", "cm4all-wp-impex") : (0, import_i18n.__)("No export profiles found"),
        disabled: true
      });
    }
    return /* @__PURE__ */ window.wp.element.createElement(
      import_components.default.SelectControl,
      {
        ref: exportProfileSelectRef,
        disabled: !exportProfiles.length,
        value: value?.name,
        onChange: setExportProfile,
        options: options.map((_) => ({
          value: _.disabled ? void 0 : _.name,
          label: _.name,
          title: _.description,
          disabled: _.disabled
        })),
        label: (0, import_i18n.__)("Export Profile:", "cm4all-wp-impex"),
        help: (0, import_i18n.__)(
          "Export profiles define which WordPress data should be extracted",
          "cm4all-wp-impex"
        )
      }
    );
  }

  // plugins/cm4all-wp-impex/src/components/rename-modal.mjs
  var import_element7 = __toESM(require_element(), 1);
  var import_components2 = __toESM(require_components(), 1);
  var import_data2 = __toESM(require_data(), 1);
  var import_i18n2 = __toESM(require_i18n(), 1);
  function RenameModal({ title, doSave, item, onRequestClose }) {
    const [name, setName] = import_element7.default.useState(item.name);
    const [description, setDescription] = import_element7.default.useState(item.description);
    const onSave = async () => {
      await doSave({ name, description });
      onRequestClose();
    };
    return /* @__PURE__ */ window.wp.element.createElement(
      import_components2.default.Modal,
      {
        title,
        icon: edit_default,
        onRequestClose: () => onRequestClose()
      },
      /* @__PURE__ */ window.wp.element.createElement(
        import_components2.default.TextControl,
        {
          label: (0, import_i18n2.__)("Name", "cm4all-wp-impex"),
          help: (0, import_i18n2.__)("Name should be short and human readable", "cm4all-wp-impex"),
          value: name,
          onChange: setName
        }
      ),
      /* @__PURE__ */ window.wp.element.createElement(
        import_components2.default.TextareaControl,
        {
          label: (0, import_i18n2.__)("Description", "cm4all-wp-impex"),
          help: (0, import_i18n2.__)(
            "Description may contain more expressive information describing the item",
            "cm4all-wp-impex"
          ),
          value: description,
          onChange: setDescription
        }
      ),
      /* @__PURE__ */ window.wp.element.createElement(
        import_components2.default.Button,
        {
          variant: "primary",
          onClick: onSave,
          disabled: name === item.name && description === item.description
        },
        "Save"
      )
    );
  }

  // plugins/cm4all-wp-impex/src/components/delete-modal.mjs
  var import_components3 = __toESM(require_components(), 1);
  var import_React = __toESM(require_React(), 1);
  function delete_modal_default({ title, doDelete, onRequestClose, children }) {
    const onDelete = async () => {
      await doDelete();
      onRequestClose();
    };
    return /* @__PURE__ */ window.wp.element.createElement(
      import_components3.default.Modal,
      {
        title,
        icon: cancel_circle_filled_default,
        onRequestClose: () => onRequestClose()
      },
      /* @__PURE__ */ window.wp.element.createElement("p", null, children),
      /* @__PURE__ */ window.wp.element.createElement(import_components3.default.Button, { variant: "primary", isDestructive: true, onClick: onDelete }, "Delete")
    );
  }

  // plugins/cm4all-wp-impex/src/components/screen-context.mjs
  var import_element8 = __toESM(require_element(), 1);
  var import_debug = __toESM(require_debug(), 1);
  var import_hooks = __toESM(require_hooks(), 1);
  var import_filters = __toESM(require_filters(), 1);
  var import_store2 = __toESM(require_store(), 1);
  var import_api_fetch = __toESM(require_api_fetch(), 1);
  var import_data3 = __toESM(require_data(), 1);
  var import_url = __toESM(require_url(), 1);
  var debug = import_debug.default.default("wp.impex.dashboard.export");
  debug("loaded");
  var ContextProvider = import_element8.default.createContext();
  function useScreenContext() {
    return import_element8.default.useContext(ContextProvider);
  }
  ScreenContext = {
    normalizeFilename(fileName) {
      return fileName.replace(/[^a-z0-9\-_]/gi, "_").replace(/(-+)|(_+)/gi, ($) => $[0]).toLowerCase().slice(-32);
    },
    currentDateString() {
      const date = /* @__PURE__ */ new Date();
      return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    },
    async saveSlicesChunk(exportDirHandle, response, chunk) {
      const slices = await response;
      debug(`saveSlicesChunk(chunk=%o) : %o`, chunk, response);
      const chunkDirHandle = await exportDirHandle.getDirectoryHandle(
        `chunk-${chunk.toString().padStart(4, "0")}`,
        { create: true }
      );
      return Promise.all(
        slices.map(async (slice, index) => {
          const sliceFileHandle = await chunkDirHandle.getFileHandle(
            `slice-${index.toString().padStart(4, "0")}.json`,
            { create: true }
          );
          slice = await import_hooks.default.applyFilters(
            import_filters.default.SLICE_REST_UNMARSHAL,
            import_filters.default.NAMESPACE,
            slice,
            index,
            chunkDirHandle
          );
          const writable = await sliceFileHandle.createWritable();
          await writable.write(JSON.stringify(slice, null, "  "));
          debug("slice(=%o) = %o", index, slice);
          await writable.close();
        })
      );
    },
    async _getSliceFilesToImport(importDirHandle) {
      const slices = [];
      for await (let sliceChunkDirectoryHandle of importDirHandle.values()) {
        if (sliceChunkDirectoryHandle.kind === "directory") {
          for await (let sliceFileHandle of sliceChunkDirectoryHandle.values()) {
            if (sliceFileHandle.kind === "file" && sliceFileHandle.name.match(/^slice-\d+\.json$/)) {
              slices.push({
                fileHandle: sliceFileHandle,
                dirHandle: sliceChunkDirectoryHandle
              });
            }
          }
        }
      }
      slices.sort((l, r) => {
        const cval = l.dirHandle.name.localeCompare(r.dirHandle.name);
        if (cval === 0) {
          return l.fileHandle.name.localeCompare(r.fileHandle.name);
        }
        return cval;
      });
      return slices;
    },
    async _uploadSlices(_import, sliceFiles) {
      const settings = import_data3.default.select(import_store2.default.KEY).getSettings();
      const path = `${settings.base_uri}/import/${_import.id}/slice`;
      const sliceUploads = sliceFiles.map(
        async ({ fileHandle, dirHandle }, position) => {
          const formData = new FormData();
          let slice = JSON.parse(await (await fileHandle.getFile()).text());
          slice = await import_hooks.default.applyFilters(
            import_filters.default.SLICE_REST_UPLOAD,
            import_filters.default.NAMESPACE,
            slice,
            parseInt(fileHandle.name.match(/^slice-(\d+)\.json$/)[1]),
            dirHandle,
            formData
          );
          if (slice) {
            debug("upload %o", {
              position,
              file: fileHandle.name,
              dir: dirHandle.name
            });
            formData.append("slice", JSON.stringify(slice, null, "  "));
            return (0, import_api_fetch.default)({
              method: "POST",
              path: import_url.default.addQueryArgs(path, { position }),
              body: formData,
              parse: false
            });
          }
        }
      );
      await Promise.all(sliceUploads);
    }
  };
  function ScreenContextProvider({ children }) {
    return /* @__PURE__ */ window.wp.element.createElement(ContextProvider.Provider, { value: ScreenContext }, children);
  }

  // plugins/cm4all-wp-impex/src/components/export.mjs
  var import_store3 = __toESM(require_store(), 1);
  var debug2 = import_debug2.default.default("wp.impex.dashboard.export");
  debug2("loaded");
  function Export() {
    const { settings, exportProfiles, exports } = import_data4.default.useSelect((select) => {
      const store = select(import_store3.default.KEY);
      return {
        settings: store.getSettings(),
        exportProfiles: store.getExportProfiles(),
        exports: store.getExports()
      };
    });
    const [exportProfile, setExportProfile] = import_element9.default.useState();
    import_element9.default.useEffect(() => {
      if (exportProfiles.length === 1) {
        setExportProfile(exportProfiles[0]);
      }
    }, [exportProfiles]);
    const {
      createExport: _createExport,
      updateExport,
      deleteExport
    } = import_data4.default.useDispatch(
      import_store3.default.KEY
      /*, []*/
    );
    const [modal, setModal] = import_element9.default.useState(null);
    const [progress, setProgress] = import_element9.default.useState(null);
    const screenContext = useScreenContext();
    const { currentUser } = import_data4.default.useSelect((select) => ({
      currentUser: select("core").getCurrentUser()
    }));
    const createExport = async () => {
      const site_url = new URL(settings["site_url"]);
      const date = screenContext.currentDateString();
      const name = `${site_url.hostname}-${exportProfile.name}-${date}`;
      const description = `Export '${exportProfile.name}' created by user '${currentUser.name}' at ${date}`;
      setProgress({
        component: /* @__PURE__ */ window.wp.element.createElement(
          import_components4.default.Modal,
          {
            title: (0, import_i18n3.__)("Creating snapshot", "cm4all-wp-impex"),
            onRequestClose: () => {
            },
            overlayClassName: "blocking"
          },
          "value",
          /* @__PURE__ */ window.wp.element.createElement("progress", { indeterminate: "true" })
        )
      });
      await _createExport(exportProfile, name, description);
      setProgress();
    };
    const onDownloadExport = async (_export) => {
      let _exportFolderName = null;
      try {
        _exportFolderName = screenContext.normalizeFilename(_export.name);
      } catch {
        return;
      }
      const exportsDirHandle = await window.showDirectoryPicker({
        // You can suggest a default start directory by passing a startIn property to the showSaveFilePicker
        startIn: "downloads",
        mode: "readwrite",
        // If an id is specified, the file picker implementation will remember a separate last-used directory for pickers with that same id.
        id: "impex-export-dir"
      });
      const exportDirHandle = await exportsDirHandle.getDirectoryHandle(
        _exportFolderName,
        {
          create: true
        }
      );
      debug2("download export %o", _export);
      const path = `${settings.base_uri}/export/${_export.id}/slice`;
      setProgress({
        component: /* @__PURE__ */ window.wp.element.createElement(
          import_components4.default.Modal,
          {
            title: (0, import_i18n3.__)("Downloading snapshot", "cm4all-wp-impex"),
            onRequestClose: () => {
            },
            overlayClassName: "blocking"
          },
          /* @__PURE__ */ window.wp.element.createElement("progress", { indeterminate: "true" })
        )
      });
      const initialResponse = await (0, import_api_fetch2.default)({
        path,
        // parse: false is needed to geta access to the headers
        parse: false
      });
      const x_wp_total = Number.parseInt(
        initialResponse.headers.get("X-WP-Total"),
        10
      );
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
            (0, import_api_fetch2.default)({
              path: import_url2.default.addQueryArgs(path, { page: chunk })
            }),
            chunk
          )
        );
      }
      await Promise.all(sliceChunks);
      setProgress(null);
    };
    return /* @__PURE__ */ window.wp.element.createElement(window.wp.element.Fragment, null, /* @__PURE__ */ window.wp.element.createElement(
      import_components4.default.Panel,
      {
        className: "export",
        header: (0, import_i18n3.__)("Export", "cm4all-wp-impex")
      },
      /* @__PURE__ */ window.wp.element.createElement(
        import_components4.default.PanelBody,
        {
          title: (0, import_i18n3.__)("Create snapshot", "cm4all-wp-impex"),
          opened: true,
          className: "create-export-form"
        },
        /* @__PURE__ */ window.wp.element.createElement(
          ExportProfileSelector,
          {
            value: exportProfile,
            onChange: setExportProfile
          }
        ),
        /* @__PURE__ */ window.wp.element.createElement(
          import_components4.default.Button,
          {
            isPrimary: true,
            onClick: createExport,
            disabled: !exportProfile
          },
          (0, import_i18n3.__)("Create Snapshot", "cm4all-wp-impex")
        )
      ),
      exports.map((_, index) => /* @__PURE__ */ window.wp.element.createElement(
        import_components4.default.PanelBody,
        {
          key: _.id,
          title: _.name,
          initialOpen: index === 0
        },
        /* @__PURE__ */ window.wp.element.createElement(import_components4.default.PanelRow, null, /* @__PURE__ */ window.wp.element.createElement(
          import_components4.default.Button,
          {
            isSecondary: true,
            onClick: () => onDownloadExport(_),
            icon: download_default
          },
          (0, import_i18n3.__)("Download snapshot", "cm4all-wp-impex")
        ), /* @__PURE__ */ window.wp.element.createElement(
          import_components4.default.DropdownMenu,
          {
            label: (0, import_i18n3.__)(
              "Additional actions on this export",
              "cm4all-wp-impex"
            ),
            controls: [
              {
                title: (0, import_i18n3.__)("Edit", "cm4all-wp-impex"),
                icon: edit_default,
                onClick: () => setModal({
                  component: RenameModal,
                  props: {
                    title: (0, import_i18n3.__)("Edit export", "cm4all-wp-impex"),
                    async doSave(data8) {
                      await updateExport(_.id, data8);
                    },
                    item: _
                  }
                })
              },
              {
                title: (0, import_i18n3.__)("Delete", "cm4all-wp-impex"),
                icon: cancel_circle_filled_default,
                onClick: () => setModal({
                  component: delete_modal_default,
                  props: {
                    title: (0, import_i18n3.__)("Delete export", "cm4all-wp-impex"),
                    children: /* @__PURE__ */ window.wp.element.createElement(window.wp.element.Fragment, null, (0, import_i18n3.__)("Are you really sure to delete export"), /* @__PURE__ */ window.wp.element.createElement("code", null, _.name), "?"),
                    async doDelete() {
                      await deleteExport(_.id);
                    }
                  }
                })
              }
            ]
          }
        )),
        /* @__PURE__ */ window.wp.element.createElement(import_components4.default.PanelRow, null, /* @__PURE__ */ window.wp.element.createElement("pre", null, JSON.stringify(_, null, "  ")))
      ))
    ), modal && /* @__PURE__ */ window.wp.element.createElement(modal.component, { ...modal.props, onRequestClose: setModal }), progress && /* @__PURE__ */ window.wp.element.createElement(import_components4.default.Fill, { name: "progress", onRequestClose: () => {
    } }, progress.component));
  }

  // plugins/cm4all-wp-impex/src/components/import.mjs
  var import_element11 = __toESM(require_element(), 1);
  var import_components6 = __toESM(require_components(), 1);
  var import_data6 = __toESM(require_data(), 1);
  var import_url3 = __toESM(require_url(), 1);
  var import_i18n5 = __toESM(require_i18n(), 1);
  var import_hooks2 = __toESM(require_hooks(), 1);
  var import_filters2 = __toESM(require_filters(), 1);
  var import_debug3 = __toESM(require_debug(), 1);
  var import_api_fetch3 = __toESM(require_api_fetch(), 1);

  // plugins/cm4all-wp-impex/src/components/import-profile-selector.mjs
  var import_components5 = __toESM(require_components(), 1);
  var import_data5 = __toESM(require_data(), 1);
  var import_element10 = __toESM(require_element(), 1);
  var import_store4 = __toESM(require_store(), 1);
  var import_i18n4 = __toESM(require_i18n(), 1);
  function ImportProfileSelector({ value, onChange }) {
    const { importProfiles } = import_data5.default.useSelect((select) => {
      const store = select(import_store4.default.KEY);
      return {
        importProfiles: store.getImportProfiles()
      };
    });
    const importProfileSelectRef = import_element10.default.useRef();
    const setImportProfile = (importProfileName = null) => {
      const importProfile = importProfiles.find(
        (_) => _.name === importProfileName
      );
      onChange(importProfile);
      if (importProfileSelectRef.current) {
        if (!importProfile) {
          importProfileSelectRef.current.selectedIndex = 0;
        }
        importProfileSelectRef.current.title = importProfile?.description || "";
      }
    };
    import_element10.default.useEffect(() => {
      setImportProfile(value?.name);
    }, [importProfiles]);
    import_element10.default.useEffect(() => {
      for (const option of importProfileSelectRef.current?.options ?? []) {
        if (!option.disabled) {
          option.title = importProfiles.find((_) => _.name === option.value)?.description;
        }
      }
    }, [importProfiles]);
    const options = [...importProfiles];
    if (importProfiles.length > 1) {
      options.unshift(
        {
          name: importProfiles.length ? (0, import_i18n4.__)("Select an import profile", "cm4all-wp-impex") : (0, import_i18n4.__)("No import profiles found"),
          disabled: true
        }
      );
    }
    return /* @__PURE__ */ window.wp.element.createElement(
      wp.components.SelectControl,
      {
        ref: importProfileSelectRef,
        disabled: !importProfiles.length,
        label: (0, import_i18n4.__)("Import Profile:", "cm4all-wp-impex"),
        value: value?.name,
        onChange: setImportProfile,
        options: options.map((_) => ({
          value: _.disabled ? void 0 : _.name,
          label: _.name,
          disabled: _.disabled
        })),
        help: (0, import_i18n4.__)(
          "Import profiles define which WordPress data should be consumed",
          "cm4all-wp-impex"
        )
      }
    );
  }

  // plugins/cm4all-wp-impex/src/components/import.mjs
  var import_store5 = __toESM(require_store(), 1);
  var debug3 = import_debug3.default.default("wp.impex.dashboard.import");
  debug3("loaded");
  function Import() {
    const { currentUser } = import_data6.default.useSelect((select) => ({
      currentUser: select("core").getCurrentUser()
    }));
    const { settings, importProfiles, imports } = import_data6.default.useSelect((select) => {
      const store = select(import_store5.default.KEY);
      return {
        settings: store.getSettings(),
        importProfiles: store.getImportProfiles(),
        imports: store.getImports()
      };
    });
    const { createImport, updateImport, deleteImport, consumeImport } = import_data6.default.useDispatch(
      import_store5.default.KEY
      /*, []*/
    );
    const [modal, setModal] = import_element11.default.useState(null);
    const [progress, setProgress] = import_element11.default.useState(null);
    const screenContext = useScreenContext();
    const [importProfile, setImportProfile] = import_element11.default.useState();
    const [cleanupContent, setCleanupContent] = import_element11.default.useState(true);
    const [cleanupMedia, setCleanupMedia] = import_element11.default.useState(true);
    import_element11.default.useEffect(() => {
      if (importProfiles.length === 1) {
        setImportProfile(importProfiles[0]);
      }
    }, [importProfiles]);
    const onConsumeImport = async (_import) => {
      debug3("onConsumeImport(%o)", _import);
      setProgress({
        component: /* @__PURE__ */ window.wp.element.createElement(
          import_components6.default.Modal,
          {
            title: (0, import_i18n5.__)("Importing data into WordPress ...", "cm4all-wp-impex"),
            onRequestClose: () => {
            },
            overlayClassName: "blocking"
          },
          /* @__PURE__ */ window.wp.element.createElement("progress", { indeterminate: "true" })
        )
      });
      await consumeImport(
        _import.id,
        {
          // @see PHP class ImpexExport::OPTION_CLEANUP_CONTENTS
          "impex-import-option-cleanup_contents": cleanupContent
        },
        null,
        null
      );
      setProgress();
    };
    const onUpload = async () => {
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
      debug3("upload export %o", importDirHandle.name);
      const date = screenContext.currentDateString();
      const name = importDirHandle.name;
      const description = `Import '${importDirHandle.name}' created by user '${currentUser.name}' at ${date}`;
      setProgress({
        component: /* @__PURE__ */ window.wp.element.createElement(
          import_components6.default.Modal,
          {
            title: (0, import_i18n5.__)("Uploading snapshot", "cm4all-wp-impex"),
            onRequestClose: () => {
            },
            overlayClassName: "blocking"
          },
          /* @__PURE__ */ window.wp.element.createElement("progress", { indeterminate: "true" })
        )
      });
      const _import = (await createImport(name, description, importProfile, {})).payload;
      const sliceFiles = await screenContext._getSliceFilesToImport(importDirHandle);
      const finished = await screenContext._uploadSlices(_import, sliceFiles);
      setProgress();
    };
    return /* @__PURE__ */ window.wp.element.createElement(window.wp.element.Fragment, null, /* @__PURE__ */ window.wp.element.createElement(
      import_components6.default.Panel,
      {
        className: "import",
        header: (0, import_i18n5.__)("Import", "cm4all-wp-impex")
      },
      /* @__PURE__ */ window.wp.element.createElement(
        import_components6.default.PanelBody,
        {
          title: (0, import_i18n5.__)("Upload snapshot to WordPress", "cm4all-wp-impex"),
          opened: true,
          className: "upload-import-form"
        },
        /* @__PURE__ */ window.wp.element.createElement(
          ImportProfileSelector,
          {
            value: importProfile,
            onChange: setImportProfile
          }
        ),
        /* @__PURE__ */ window.wp.element.createElement(
          import_components6.default.Button,
          {
            isPrimary: true,
            onClick: onUpload,
            icon: upload_default,
            disabled: !importProfile
          },
          (0, import_i18n5.__)("Upload snapshot", "cm4all-wp-impex")
        )
      ),
      /* @__PURE__ */ window.wp.element.createElement(
        import_components6.default.PanelBody,
        {
          title: (0, import_i18n5.__)("Import options", "cm4all-wp-impex"),
          opened: true,
          className: "import-options-form"
        },
        /* @__PURE__ */ window.wp.element.createElement(
          import_components6.default.ToggleControl,
          {
            help: cleanupContent ? (0, import_i18n5.__)("Clean up existing post, page, block pattern, nav_menu an reusable block items", "cm4all-wp-impex") : (0, import_i18n5.__)("Keep existing post, page, block pattern, nav_menu an reusable block items.", "cm4all-wp-impex"),
            checked: cleanupContent,
            onChange: setCleanupContent,
            label: (0, import_i18n5.__)("Remove existing content before importing uploaded snapshot", "cm4all-wp-impex")
          }
        ),
        /* @__PURE__ */ window.wp.element.createElement(
          import_components6.default.ToggleControl,
          {
            help: cleanupMedia ? (0, import_i18n5.__)("Clean up existing media like images and videos (located at WordPress uploads)", "cm4all-wp-impex") : (0, import_i18n5.__)("Keep existing media items. Media might be partly overwritten by export", "cm4all-wp-impex"),
            checked: cleanupMedia,
            disabled: !imports.length,
            onChange: setCleanupMedia,
            label: (0, import_i18n5.__)("Remove existing media before import", "cm4all-wp-impex")
          }
        )
      ),
      imports.map((_, index) => /* @__PURE__ */ window.wp.element.createElement(
        import_components6.default.PanelBody,
        {
          key: _.id,
          title: _.name,
          initialOpen: index === 0
        },
        /* @__PURE__ */ window.wp.element.createElement(import_components6.default.PanelRow, null, /* @__PURE__ */ window.wp.element.createElement(
          import_components6.default.Button,
          {
            isDestructive: true,
            isPrimary: true,
            onClick: () => onConsumeImport(_),
            icon: cloud_upload_default
          },
          (0, import_i18n5.__)("Import uploaded snapshot", "cm4all-wp-impex")
        ), /* @__PURE__ */ window.wp.element.createElement(
          import_components6.default.DropdownMenu,
          {
            label: (0, import_i18n5.__)(
              "Additional actions on this import",
              "cm4all-wp-impex"
            ),
            controls: [
              {
                title: (0, import_i18n5.__)("Edit", "cm4all-wp-impex"),
                icon: edit_default,
                onClick: () => setModal({
                  component: RenameModal,
                  props: {
                    title: (0, import_i18n5.__)("Edit import snapshot", "cm4all-wp-impex"),
                    async doSave(data8) {
                      await updateImport(_.id, data8);
                    },
                    item: _
                  }
                })
              },
              {
                title: (0, import_i18n5.__)("Delete", "cm4all-wp-impex"),
                icon: cancel_circle_filled_default,
                onClick: () => setModal({
                  component: delete_modal_default,
                  props: {
                    title: (0, import_i18n5.__)("Delete import", "cm4all-wp-impex"),
                    children: /* @__PURE__ */ window.wp.element.createElement(window.wp.element.Fragment, null, (0, import_i18n5.__)(
                      "Are you really sure to delete import",
                      "cm4all-wp-impex"
                    ), /* @__PURE__ */ window.wp.element.createElement("code", null, _.name), "?"),
                    async doDelete() {
                      await deleteImport(_.id);
                    }
                  }
                })
              }
            ]
          }
        )),
        /* @__PURE__ */ window.wp.element.createElement(import_components6.default.PanelRow, null, /* @__PURE__ */ window.wp.element.createElement("pre", { style: { overflow: "auto" } }, JSON.stringify(_, null, "  ")))
      ))
    ), modal && /* @__PURE__ */ window.wp.element.createElement(modal.component, { ...modal.props, onRequestClose: setModal }), progress && /* @__PURE__ */ window.wp.element.createElement(import_components6.default.Fill, { name: "progress", onRequestClose: () => {
    } }, progress.component));
  }

  // plugins/cm4all-wp-impex/src/components/screen.mjs
  var debug4 = import_debug4.default.default("wp.impex.dashboard.screen");
  debug4("loaded");
  var isFileystemApiAvailable = typeof window.showDirectoryPicker === "function";
  var isCryptoRandomAvailable = typeof window?.crypto?.randomUUID === "function";
  function AdvancedTab() {
    return /* @__PURE__ */ window.wp.element.createElement(import_components7.default.Flex, { direction: "row", align: "top" }, /* @__PURE__ */ window.wp.element.createElement(import_components7.default.FlexItem, { isBlock: true }, /* @__PURE__ */ window.wp.element.createElement(Export, null)), /* @__PURE__ */ window.wp.element.createElement(import_components7.default.FlexItem, { isBlock: true }, /* @__PURE__ */ window.wp.element.createElement(Import, null)));
  }
  async function ImportExportGeneratorConsumer(gen, setProgress, defaultErrorPopupTitle) {
    try {
      for await (const state of gen) {
        switch (state.type) {
          case "progress":
            setProgress({
              component: /* @__PURE__ */ window.wp.element.createElement(
                import_components7.default.Modal,
                {
                  title: state.title,
                  onRequestClose: () => {
                  },
                  overlayClassName: "blocking"
                },
                state.message,
                /* @__PURE__ */ window.wp.element.createElement("progress", { indeterminate: "true" })
              )
            });
            break;
          case "info":
            gen.next(new Promise((resolve) => {
              setProgress({
                component: /* @__PURE__ */ window.wp.element.createElement(
                  import_components7.default.Modal,
                  {
                    title: state.title,
                    onRequestClose: () => resolve(),
                    overlayClassName: "blocking"
                  },
                  state.message
                )
              });
            }));
            break;
        }
      }
      setProgress(null);
    } catch (ex) {
      debug4(ex);
      setProgress({
        component: /* @__PURE__ */ window.wp.element.createElement(
          import_components7.default.Modal,
          {
            title: ex.title || defaultErrorPopupTitle,
            onRequestClose: () => setProgress(null),
            overlayClassName: "blocking fault"
          },
          ex.message.split("\n").map((line, index) => /* @__PURE__ */ window.wp.element.createElement("p", { key: index }, line)),
          /* @__PURE__ */ window.wp.element.createElement(import_components7.default.Flex, { direction: "row", justify: "flex-end" }, /* @__PURE__ */ window.wp.element.createElement(import_components7.default.Button, { isPrimary: true, onClick: () => setProgress(null) }, (0, import_i18n6.__)("OK", "cm4all-wp-impex")))
        )
      });
    }
  }
  function SimpleTab() {
    const screenContext = useScreenContext();
    const { exportProfiles, importProfiles } = import_data7.default.useSelect((select) => {
      const store = select(import_store6.default.KEY);
      return {
        exportProfiles: store.getExportProfiles(),
        importProfiles: store.getImportProfiles()
      };
    });
    const { createAndDownloadExport, createAndUploadConsumeImport } = import_data7.default.useDispatch(import_store6.default.KEY);
    const [exportProfile, setExportProfile] = import_element12.default.useState();
    import_element12.default.useEffect(() => {
      if (exportProfiles.length === 1) {
        setExportProfile(exportProfiles[0]);
      }
    }, [exportProfiles]);
    const [importProfile, setImportProfile] = import_element12.default.useState();
    import_element12.default.useEffect(() => {
      if (importProfiles.length === 1) {
        setImportProfile(importProfiles[0]);
      }
    }, [importProfiles]);
    const [progress, setProgress] = import_element12.default.useState(null);
    const [cleanupContent, setCleanupContent] = import_element12.default.useState(true);
    const [cleanupMedia, setCleanupMedia] = import_element12.default.useState(true);
    const _createAndUploadConsumeImport = async () => {
      console.log({ importProfile, screenContext });
      const gen = await createAndUploadConsumeImport(
        importProfile,
        {
          // @see PHP class ImpexExport::OPTION_CLEANUP_CONTENTS
          "impex-import-option-cleanup_contents": cleanupContent,
          // @see PHP class ImpexExport::OPTION_CLEANUP_MEDIA
          "impex-import-option-cleanup_media": cleanupMedia
        },
        screenContext
      );
      await ImportExportGeneratorConsumer(gen, setProgress, (0, import_i18n6.__)("Import failed", "cm4all-wp-impex"));
    };
    const _createAndDownloadExport = async () => {
      console.log({ exportProfile, screenContext });
      const gen = await createAndDownloadExport(exportProfile, screenContext);
      await ImportExportGeneratorConsumer(gen, setProgress, (0, import_i18n6.__)("Export failed", "cm4all-wp-impex"));
    };
    debug4({ exportProfile, importProfile, _createAndDownloadExport });
    return /* @__PURE__ */ window.wp.element.createElement(window.wp.element.Fragment, null, /* @__PURE__ */ window.wp.element.createElement(import_components7.default.Flex, { direction: "row", align: "top" }, /* @__PURE__ */ window.wp.element.createElement(import_components7.default.FlexItem, { isBlock: true }, /* @__PURE__ */ window.wp.element.createElement(import_components7.default.Panel, { className: "export" }, /* @__PURE__ */ window.wp.element.createElement(import_components7.default.PanelBody, { opened: true, className: "create-export-form" }, /* @__PURE__ */ window.wp.element.createElement(
      ExportProfileSelector,
      {
        value: exportProfile,
        onChange: setExportProfile
      }
    ), /* @__PURE__ */ window.wp.element.createElement(
      import_components7.default.Button,
      {
        variant: "primary",
        disabled: !exportProfile,
        onClick: _createAndDownloadExport
      },
      "Export"
    )))), /* @__PURE__ */ window.wp.element.createElement(import_components7.default.FlexItem, { isBlock: true }, /* @__PURE__ */ window.wp.element.createElement(import_components7.default.Panel, { className: "import" }, /* @__PURE__ */ window.wp.element.createElement(import_components7.default.PanelBody, { opened: true, className: "upload-import-form" }, /* @__PURE__ */ window.wp.element.createElement(
      ImportProfileSelector,
      {
        value: importProfile,
        onChange: setImportProfile
      }
    ), /* @__PURE__ */ window.wp.element.createElement(
      import_components7.default.ToggleControl,
      {
        help: cleanupContent ? (0, import_i18n6.__)("Clean up existing post, page, block pattern, nav_menu an reusable block items", "cm4all-wp-impex") : (0, import_i18n6.__)("Keep existing post, page, block pattern, nav_menu an reusable block items.", "cm4all-wp-impex"),
        checked: cleanupContent,
        onChange: setCleanupContent,
        label: (0, import_i18n6.__)("Remove existing content before import", "cm4all-wp-impex")
      }
    ), /* @__PURE__ */ window.wp.element.createElement(
      import_components7.default.ToggleControl,
      {
        help: cleanupMedia ? (0, import_i18n6.__)("Clean up existing media like images and videos (located at WordPress uploads)", "cm4all-wp-impex") : (0, import_i18n6.__)("Keep existing items. Media might be partly overwritten by export", "cm4all-wp-impex"),
        checked: cleanupMedia,
        onChange: setCleanupMedia,
        label: (0, import_i18n6.__)("Remove existing media before import", "cm4all-wp-impex")
      }
    ), /* @__PURE__ */ window.wp.element.createElement(
      import_components7.default.Button,
      {
        isDestructive: true,
        isPrimary: true,
        disabled: !importProfile,
        onClick: _createAndUploadConsumeImport
      },
      "Import"
    ))))), progress && /* @__PURE__ */ window.wp.element.createElement(import_components7.default.Fill, { name: "progress", onRequestClose: () => {
    } }, progress.component));
  }
  function screen_default() {
    return /* @__PURE__ */ window.wp.element.createElement("div", null, /* @__PURE__ */ window.wp.element.createElement("h1", null, (0, import_i18n6.__)("ImpEx", "cm4all-wp-impex")), /* @__PURE__ */ window.wp.element.createElement(import_components7.default.SlotFillProvider, null, /* @__PURE__ */ window.wp.element.createElement(
      import_components7.default.TabPanel,
      {
        tabs: [
          {
            name: "basic",
            title: (0, import_i18n6.__)("Basic", "cm4all-wp-impex")
          },
          {
            name: "advanced",
            title: (0, import_i18n6.__)("Advanced", "cm4all-wp-impex")
          }
        ]
      },
      (tab) => tab.name === "advanced" ? /* @__PURE__ */ window.wp.element.createElement(AdvancedTab, null) : /* @__PURE__ */ window.wp.element.createElement(SimpleTab, null)
    ), /* @__PURE__ */ window.wp.element.createElement(import_components7.default.Slot, { name: "progress" }), !isFileystemApiAvailable && /* @__PURE__ */ window.wp.element.createElement(
      import_components7.default.Modal,
      {
        title: "Ouch - your browser does not support the File System Access API :-(",
        isDismissible: false
      },
      /* @__PURE__ */ window.wp.element.createElement("p", null, "ImpEx Import / Export requires a browser implementing the", " ", /* @__PURE__ */ window.wp.element.createElement("a", { href: "https://web.dev/file-system-access/" }, "File System Access API"), "."),
      /* @__PURE__ */ window.wp.element.createElement("p", null, "Currently only Chromium based browsers like Chrome, Chromium, MS Edge are known to support this feature."),
      /* @__PURE__ */ window.wp.element.createElement("p", null, "See", " ", /* @__PURE__ */ window.wp.element.createElement("a", { href: "https://caniuse.com/mdn-api_window_showdirectorypicker" }, "here"), " ", "to find the latest list of browsers supporting the", " ", /* @__PURE__ */ window.wp.element.createElement("a", { href: "https://web.dev/file-system-access/" }, "File System Access API"), " ", "feature.")
    ), !isCryptoRandomAvailable && /* @__PURE__ */ window.wp.element.createElement(
      import_components7.default.Modal,
      {
        title: "Ouch - your browser does not support the Crypto API :-(",
        isDismissible: false
      },
      /* @__PURE__ */ window.wp.element.createElement("p", null, "ImpEx Import / Export requires a browser implementing the", " ", /* @__PURE__ */ window.wp.element.createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/API/Crypto" }, "Browser Crypto API"), ".")
    )));
  }

  // plugins/cm4all-wp-impex/src/wp.impex.dashboard.mjs
  var debug5 = import_debug5.default.default("wp.impex.dashboard");
  debug5("loaded");
  if (!document.querySelector(".notice.notice-error")) {
    import_element13.default.render(
      /* @__PURE__ */ window.wp.element.createElement(ScreenContextProvider, null, /* @__PURE__ */ window.wp.element.createElement(screen_default, null)),
      document.getElementById("cm4all_wp_impex_wp_admin_dashboard")
    );
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkB3b3JkcHJlc3MvZWxlbWVudCIsICJjbTRhbGwtd3AtYnVuZGxlLXdvcmRwcmVzcy1wbHVnaW46QGNtNGFsbC1pbXBleC9kZWJ1ZyIsICJjbTRhbGwtd3AtYnVuZGxlLXdvcmRwcmVzcy1wbHVnaW46QHdvcmRwcmVzcy9jb21wb25lbnRzIiwgImNtNGFsbC13cC1idW5kbGUtd29yZHByZXNzLXBsdWdpbjpAd29yZHByZXNzL2RhdGEiLCAiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkB3b3JkcHJlc3MvaTE4biIsICJjbTRhbGwtd3AtYnVuZGxlLXdvcmRwcmVzcy1wbHVnaW46QGNtNGFsbC1pbXBleC9zdG9yZSIsICJjbTRhbGwtd3AtYnVuZGxlLXdvcmRwcmVzcy1wbHVnaW46QHdvcmRwcmVzcy9hcGktZmV0Y2giLCAiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOkB3b3JkcHJlc3MvdXJsIiwgImNtNGFsbC13cC1idW5kbGUtd29yZHByZXNzLXBsdWdpbjpAd29yZHByZXNzL3ByaW1pdGl2ZXMiLCAiY200YWxsLXdwLWJ1bmRsZS13b3JkcHJlc3MtcGx1Z2luOlJlYWN0IiwgImNtNGFsbC13cC1idW5kbGUtd29yZHByZXNzLXBsdWdpbjpAd29yZHByZXNzL2hvb2tzIiwgImNtNGFsbC13cC1idW5kbGUtd29yZHByZXNzLXBsdWdpbjpAY200YWxsLWltcGV4L2ZpbHRlcnMiLCAiLi4vc3JjL3dwLmltcGV4LmRhc2hib2FyZC5tanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLm1qcyIsICIuLi9zcmMvY29tcG9uZW50cy9leHBvcnQubWpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L0B3b3JkcHJlc3MvaWNvbnMvc3JjL2xpYnJhcnkvY2FuY2VsLWNpcmNsZS1maWxsZWQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvQHdvcmRwcmVzcy9pY29ucy9zcmMvbGlicmFyeS9jbG91ZC11cGxvYWQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvQHdvcmRwcmVzcy9pY29ucy9zcmMvbGlicmFyeS9kb3dubG9hZC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9Ad29yZHByZXNzL2ljb25zL3NyYy9saWJyYXJ5L3BlbmNpbC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9Ad29yZHByZXNzL2ljb25zL3NyYy9saWJyYXJ5L2VkaXQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvQHdvcmRwcmVzcy9pY29ucy9zcmMvbGlicmFyeS91cGxvYWQuanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvZXhwb3J0LXByb2ZpbGUtc2VsZWN0b3IubWpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3JlbmFtZS1tb2RhbC5tanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLm1qcyIsICIuLi9zcmMvY29tcG9uZW50cy9zY3JlZW4tY29udGV4dC5tanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvaW1wb3J0Lm1qcyIsICIuLi9zcmMvY29tcG9uZW50cy9pbXBvcnQtcHJvZmlsZS1zZWxlY3Rvci5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmVsZW1lbnQ7IiwgIm1vZHVsZS5leHBvcnRzID0gd3AuaW1wZXguZGVidWc7IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmNvbXBvbmVudHM7IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmRhdGE7IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmkxOG47IiwgIm1vZHVsZS5leHBvcnRzID0gd3AuaW1wZXguc3RvcmU7IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmFwaUZldGNoOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC51cmw7IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLnByaW1pdGl2ZXM7IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0OyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5ob29rczsiLCAibW9kdWxlLmV4cG9ydHMgPSB3cC5pbXBleC5maWx0ZXJzOyIsICJpbXBvcnQgZWxlbWVudCBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZGVidWdcIjtcblxuaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9jb21wb25lbnRzL3NjcmVlbi5tanNcIjtcbmltcG9ydCB7IFNjcmVlbkNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2NyZWVuLWNvbnRleHQubWpzXCI7XG5cbmltcG9ydCBcIi4vd3AuaW1wZXguZGFzaGJvYXJkLnNjc3NcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1Zy5kZWZhdWx0KFwid3AuaW1wZXguZGFzaGJvYXJkXCIpO1xuZGVidWcoXCJsb2FkZWRcIik7XG5cbi8vIHJlbmRlciBpbXBleCBkYXNoYm9hcmQgb25seSBpZiBub3QgZXJyb3Igbm90aWNlICg9PiB3b3JkcHJlc3MgaW1wb3J0ZXIgcGx1Z2luIGlzIG5vdCBpbnN0YWxsZWQpIGlzIHNob3duXG5pZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWNlLm5vdGljZS1lcnJvclwiKSkge1xuICBlbGVtZW50LnJlbmRlcihcbiAgICA8U2NyZWVuQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPFNjcmVlbiAvPlxuICAgIDwvU2NyZWVuQ29udGV4dFByb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNtNGFsbF93cF9pbXBleF93cF9hZG1pbl9kYXNoYm9hcmRcIilcbiAgKTtcbn1cbiIsICJpbXBvcnQgZWxlbWVudCBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5pbXBvcnQgY29tcG9uZW50cyBmcm9tIFwiQHdvcmRwcmVzcy9jb21wb25lbnRzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiQHdvcmRwcmVzcy9kYXRhXCI7XG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gXCJAd29yZHByZXNzL2kxOG5cIjtcbmltcG9ydCBEZWJ1ZyBmcm9tIFwiQGNtNGFsbC1pbXBleC9kZWJ1Z1wiO1xuXG5pbXBvcnQgU3RvcmUgZnJvbSBcIkBjbTRhbGwtaW1wZXgvc3RvcmVcIjtcblxuaW1wb3J0IEV4cG9ydCBmcm9tIFwiLi9leHBvcnQubWpzXCI7XG5pbXBvcnQgSW1wb3J0IGZyb20gXCIuL2ltcG9ydC5tanNcIjtcblxuaW1wb3J0IEV4cG9ydFByb2ZpbGVTZWxlY3RvciBmcm9tIFwiLi9leHBvcnQtcHJvZmlsZS1zZWxlY3Rvci5tanNcIjtcbmltcG9ydCBJbXBvcnRQcm9maWxlU2VsZWN0b3IgZnJvbSBcIi4vaW1wb3J0LXByb2ZpbGUtc2VsZWN0b3IubWpzXCI7XG5pbXBvcnQgdXNlU2NyZWVuQ29udGV4dCBmcm9tIFwiLi9zY3JlZW4tY29udGV4dC5tanNcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1Zy5kZWZhdWx0KFwid3AuaW1wZXguZGFzaGJvYXJkLnNjcmVlblwiKTtcbmRlYnVnKFwibG9hZGVkXCIpO1xuXG5jb25zdCBpc0ZpbGV5c3RlbUFwaUF2YWlsYWJsZSA9XG4gIHR5cGVvZiB3aW5kb3cuc2hvd0RpcmVjdG9yeVBpY2tlciA9PT0gXCJmdW5jdGlvblwiO1xuXG5jb25zdCBpc0NyeXB0b1JhbmRvbUF2YWlsYWJsZSA9XG4gIHR5cGVvZiB3aW5kb3c/LmNyeXB0bz8ucmFuZG9tVVVJRCA9PT0gXCJmdW5jdGlvblwiO1xuXG5mdW5jdGlvbiBBZHZhbmNlZFRhYigpIHtcbiAgcmV0dXJuIChcbiAgICA8Y29tcG9uZW50cy5GbGV4IGRpcmVjdGlvbj1cInJvd1wiIGFsaWduPVwidG9wXCI+XG4gICAgICA8Y29tcG9uZW50cy5GbGV4SXRlbSBpc0Jsb2NrPlxuICAgICAgICA8RXhwb3J0IC8+XG4gICAgICA8L2NvbXBvbmVudHMuRmxleEl0ZW0+XG5cbiAgICAgIDxjb21wb25lbnRzLkZsZXhJdGVtIGlzQmxvY2s+XG4gICAgICAgIDxJbXBvcnQgLz5cbiAgICAgIDwvY29tcG9uZW50cy5GbGV4SXRlbT5cbiAgICA8L2NvbXBvbmVudHMuRmxleD5cbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gSW1wb3J0RXhwb3J0R2VuZXJhdG9yQ29uc3VtZXIoZ2VuLCBzZXRQcm9ncmVzcywgZGVmYXVsdEVycm9yUG9wdXBUaXRsZSkge1xuICB0cnkge1xuICAgIGZvciBhd2FpdCAoY29uc3Qgc3RhdGUgb2YgZ2VuKSB7XG4gICAgICBzd2l0Y2ggKHN0YXRlLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInByb2dyZXNzXCI6XG4gICAgICAgICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgICAgICAgIDxjb21wb25lbnRzLk1vZGFsXG4gICAgICAgICAgICAgICAgdGl0bGU9e3N0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7fX1cbiAgICAgICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwiYmxvY2tpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N0YXRlLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPHByb2dyZXNzIGluZGV0ZXJtaW5hdGU9XCJ0cnVlXCI+PC9wcm9ncmVzcz5cbiAgICAgICAgICAgICAgPC9jb21wb25lbnRzLk1vZGFsPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImluZm9cIjpcbiAgICAgICAgICBnZW4ubmV4dChuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgICAgICAgICBjb21wb25lbnQ6IChcbiAgICAgICAgICAgICAgICA8Y29tcG9uZW50cy5Nb2RhbFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3N0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHJlc29sdmUoKX1cbiAgICAgICAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJibG9ja2luZ1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3N0YXRlLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9jb21wb25lbnRzLk1vZGFsPlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRQcm9ncmVzcyhudWxsKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBkZWJ1ZyhleCk7XG4gICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgIDxjb21wb25lbnRzLk1vZGFsXG4gICAgICAgICAgdGl0bGU9e2V4LnRpdGxlIHx8IGRlZmF1bHRFcnJvclBvcHVwVGl0bGV9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldFByb2dyZXNzKG51bGwpfVxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJibG9ja2luZyBmYXVsdFwiXG4gICAgICAgID5cbiAgICAgICAgICB7ZXgubWVzc2FnZS5zcGxpdChcIlxcblwiKS5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8cCBrZXk9e2luZGV4fT57bGluZX08L3A+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGNvbXBvbmVudHMuRmxleCBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxjb21wb25lbnRzLkJ1dHRvbiBpc1ByaW1hcnkgb25DbGljaz17KCkgPT4gc2V0UHJvZ3Jlc3MobnVsbCl9PlxuICAgICAgICAgICAgICB7X18oXCJPS1wiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICAgIDwvY29tcG9uZW50cy5CdXR0b24+XG4gICAgICAgICAgPC9jb21wb25lbnRzLkZsZXg+XG4gICAgICAgIDwvY29tcG9uZW50cy5Nb2RhbD5cbiAgICAgICksXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gU2ltcGxlVGFiKCkge1xuICBjb25zdCBzY3JlZW5Db250ZXh0ID0gdXNlU2NyZWVuQ29udGV4dCgpO1xuXG4gIGNvbnN0IHsgZXhwb3J0UHJvZmlsZXMsIGltcG9ydFByb2ZpbGVzIH0gPSBkYXRhLnVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBzZWxlY3QoU3RvcmUuS0VZKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwb3J0UHJvZmlsZXM6IHN0b3JlLmdldEV4cG9ydFByb2ZpbGVzKCksXG4gICAgICBpbXBvcnRQcm9maWxlczogc3RvcmUuZ2V0SW1wb3J0UHJvZmlsZXMoKSxcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCB7IGNyZWF0ZUFuZERvd25sb2FkRXhwb3J0LCBjcmVhdGVBbmRVcGxvYWRDb25zdW1lSW1wb3J0IH0gPSBkYXRhLnVzZURpc3BhdGNoKFN0b3JlLktFWSk7XG5cbiAgY29uc3QgW2V4cG9ydFByb2ZpbGUsIHNldEV4cG9ydFByb2ZpbGVdID0gZWxlbWVudC51c2VTdGF0ZSgpO1xuICBlbGVtZW50LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGV4cG9ydFByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2V0RXhwb3J0UHJvZmlsZShleHBvcnRQcm9maWxlc1swXSk7XG4gICAgfVxuICB9LCBbZXhwb3J0UHJvZmlsZXNdKTtcblxuICBjb25zdCBbaW1wb3J0UHJvZmlsZSwgc2V0SW1wb3J0UHJvZmlsZV0gPSBlbGVtZW50LnVzZVN0YXRlKCk7XG4gIGVsZW1lbnQudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW1wb3J0UHJvZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBzZXRJbXBvcnRQcm9maWxlKGltcG9ydFByb2ZpbGVzWzBdKTtcbiAgICB9XG4gIH0sIFtpbXBvcnRQcm9maWxlc10pO1xuXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gZWxlbWVudC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NsZWFudXBDb250ZW50LCBzZXRDbGVhbnVwQ29udGVudF0gPSBlbGVtZW50LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY2xlYW51cE1lZGlhLCBzZXRDbGVhbnVwTWVkaWFdID0gZWxlbWVudC51c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBfY3JlYXRlQW5kVXBsb2FkQ29uc3VtZUltcG9ydCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IGltcG9ydFByb2ZpbGUsIHNjcmVlbkNvbnRleHQgfSk7XG4gICAgY29uc3QgZ2VuID0gYXdhaXQgY3JlYXRlQW5kVXBsb2FkQ29uc3VtZUltcG9ydChcbiAgICAgIGltcG9ydFByb2ZpbGUsXG4gICAgICB7XG4gICAgICAgIC8vIEBzZWUgUEhQIGNsYXNzIEltcGV4RXhwb3J0OjpPUFRJT05fQ0xFQU5VUF9DT05URU5UU1xuICAgICAgICAnaW1wZXgtaW1wb3J0LW9wdGlvbi1jbGVhbnVwX2NvbnRlbnRzJyA6IGNsZWFudXBDb250ZW50LFxuICAgICAgICAvLyBAc2VlIFBIUCBjbGFzcyBJbXBleEV4cG9ydDo6T1BUSU9OX0NMRUFOVVBfTUVESUFcbiAgICAgICAgJ2ltcGV4LWltcG9ydC1vcHRpb24tY2xlYW51cF9tZWRpYScgOiBjbGVhbnVwTWVkaWEsXG4gICAgICB9LFxuICAgICAgc2NyZWVuQ29udGV4dFxuICAgICk7XG5cbiAgICBhd2FpdCBJbXBvcnRFeHBvcnRHZW5lcmF0b3JDb25zdW1lcihnZW4sIHNldFByb2dyZXNzLCBfXyhcIkltcG9ydCBmYWlsZWRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIikpO1xuICB9O1xuXG4gIGNvbnN0IF9jcmVhdGVBbmREb3dubG9hZEV4cG9ydCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IGV4cG9ydFByb2ZpbGUsIHNjcmVlbkNvbnRleHQgfSk7XG4gICAgY29uc3QgZ2VuID0gYXdhaXQgY3JlYXRlQW5kRG93bmxvYWRFeHBvcnQoZXhwb3J0UHJvZmlsZSwgc2NyZWVuQ29udGV4dCk7XG5cbiAgICBhd2FpdCBJbXBvcnRFeHBvcnRHZW5lcmF0b3JDb25zdW1lcihnZW4sIHNldFByb2dyZXNzLCBfXyhcIkV4cG9ydCBmYWlsZWRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIikpO1xuICB9O1xuXG4gIGRlYnVnKHsgZXhwb3J0UHJvZmlsZSwgaW1wb3J0UHJvZmlsZSwgX2NyZWF0ZUFuZERvd25sb2FkRXhwb3J0IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxjb21wb25lbnRzLkZsZXggZGlyZWN0aW9uPVwicm93XCIgYWxpZ249XCJ0b3BcIj5cbiAgICAgICAgPGNvbXBvbmVudHMuRmxleEl0ZW0gaXNCbG9jaz5cbiAgICAgICAgICA8Y29tcG9uZW50cy5QYW5lbCBjbGFzc05hbWU9XCJleHBvcnRcIj5cbiAgICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsQm9keSBvcGVuZWQgY2xhc3NOYW1lPVwiY3JlYXRlLWV4cG9ydC1mb3JtXCI+XG4gICAgICAgICAgICAgIDxFeHBvcnRQcm9maWxlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZXhwb3J0UHJvZmlsZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RXhwb3J0UHJvZmlsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGNvbXBvbmVudHMuQnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZXhwb3J0UHJvZmlsZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtfY3JlYXRlQW5kRG93bmxvYWRFeHBvcnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFeHBvcnRcbiAgICAgICAgICAgICAgPC9jb21wb25lbnRzLkJ1dHRvbj5cbiAgICAgICAgICAgIDwvY29tcG9uZW50cy5QYW5lbEJvZHk+XG4gICAgICAgICAgPC9jb21wb25lbnRzLlBhbmVsPlxuICAgICAgICA8L2NvbXBvbmVudHMuRmxleEl0ZW0+XG5cbiAgICAgICAgPGNvbXBvbmVudHMuRmxleEl0ZW0gaXNCbG9jaz5cbiAgICAgICAgICA8Y29tcG9uZW50cy5QYW5lbCBjbGFzc05hbWU9XCJpbXBvcnRcIj5cbiAgICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsQm9keSBvcGVuZWQgY2xhc3NOYW1lPVwidXBsb2FkLWltcG9ydC1mb3JtXCI+XG4gICAgICAgICAgICAgIDxJbXBvcnRQcm9maWxlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW1wb3J0UHJvZmlsZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0SW1wb3J0UHJvZmlsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGNvbXBvbmVudHMuVG9nZ2xlQ29udHJvbFxuICAgICAgICAgICAgICAgIGhlbHA9eyBjbGVhbnVwQ29udGVudCA/IF9fKFwiQ2xlYW4gdXAgZXhpc3RpbmcgcG9zdCwgcGFnZSwgYmxvY2sgcGF0dGVybiwgbmF2X21lbnUgYW4gcmV1c2FibGUgYmxvY2sgaXRlbXNcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIikgOiBfXyhcIktlZXAgZXhpc3RpbmcgcG9zdCwgcGFnZSwgYmxvY2sgcGF0dGVybiwgbmF2X21lbnUgYW4gcmV1c2FibGUgYmxvY2sgaXRlbXMuXCIsIFwiY200YWxsLXdwLWltcGV4XCIpIH1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXsgY2xlYW51cENvbnRlbnQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgc2V0Q2xlYW51cENvbnRlbnQgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcIlJlbW92ZSBleGlzdGluZyBjb250ZW50IGJlZm9yZSBpbXBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9jb21wb25lbnRzLlRvZ2dsZUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxjb21wb25lbnRzLlRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICAgICAgICBoZWxwPXsgY2xlYW51cE1lZGlhID8gX18oXCJDbGVhbiB1cCBleGlzdGluZyBtZWRpYSBsaWtlIGltYWdlcyBhbmQgdmlkZW9zIChsb2NhdGVkIGF0IFdvcmRQcmVzcyB1cGxvYWRzKVwiLCBcImNtNGFsbC13cC1pbXBleFwiKSA6IF9fKFwiS2VlcCBleGlzdGluZyBpdGVtcy4gTWVkaWEgbWlnaHQgYmUgcGFydGx5IG92ZXJ3cml0dGVuIGJ5IGV4cG9ydFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSB9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17IGNsZWFudXBNZWRpYSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBzZXRDbGVhbnVwTWVkaWEgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcIlJlbW92ZSBleGlzdGluZyBtZWRpYSBiZWZvcmUgaW1wb3J0XCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvY29tcG9uZW50cy5Ub2dnbGVDb250cm9sPlxuICAgICAgICAgICAgICA8Y29tcG9uZW50cy5CdXR0b25cbiAgICAgICAgICAgICAgICBpc0Rlc3RydWN0aXZlXG4gICAgICAgICAgICAgICAgaXNQcmltYXJ5XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpbXBvcnRQcm9maWxlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e19jcmVhdGVBbmRVcGxvYWRDb25zdW1lSW1wb3J0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSW1wb3J0XG4gICAgICAgICAgICAgIDwvY29tcG9uZW50cy5CdXR0b24+XG4gICAgICAgICAgICA8L2NvbXBvbmVudHMuUGFuZWxCb2R5PlxuICAgICAgICAgIDwvY29tcG9uZW50cy5QYW5lbD5cbiAgICAgICAgPC9jb21wb25lbnRzLkZsZXhJdGVtPlxuICAgICAgPC9jb21wb25lbnRzLkZsZXg+XG4gICAgICB7cHJvZ3Jlc3MgJiYgKFxuICAgICAgICA8Y29tcG9uZW50cy5GaWxsIG5hbWU9XCJwcm9ncmVzc1wiIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7fX0+XG4gICAgICAgICAge3Byb2dyZXNzLmNvbXBvbmVudH1cbiAgICAgICAgPC9jb21wb25lbnRzLkZpbGw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57X18oXCJJbXBFeFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX08L2gxPlxuXG4gICAgICA8Y29tcG9uZW50cy5TbG90RmlsbFByb3ZpZGVyPlxuICAgICAgICA8Y29tcG9uZW50cy5UYWJQYW5lbFxuICAgICAgICAgIHRhYnM9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJiYXNpY1wiLFxuICAgICAgICAgICAgICB0aXRsZTogX18oXCJCYXNpY1wiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiYWR2YW5jZWRcIixcbiAgICAgICAgICAgICAgdGl0bGU6IF9fKFwiQWR2YW5jZWRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICB7KHRhYikgPT4gKHRhYi5uYW1lID09PSBcImFkdmFuY2VkXCIgPyA8QWR2YW5jZWRUYWIgLz4gOiA8U2ltcGxlVGFiIC8+KX1cbiAgICAgICAgPC9jb21wb25lbnRzLlRhYlBhbmVsPlxuXG4gICAgICAgIDxjb21wb25lbnRzLlNsb3QgbmFtZT1cInByb2dyZXNzXCIgLz5cblxuICAgICAgICB7IWlzRmlsZXlzdGVtQXBpQXZhaWxhYmxlICYmIChcbiAgICAgICAgICA8Y29tcG9uZW50cy5Nb2RhbFxuICAgICAgICAgICAgdGl0bGU9XCJPdWNoIC0geW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIEZpbGUgU3lzdGVtIEFjY2VzcyBBUEkgOi0oXCJcbiAgICAgICAgICAgIGlzRGlzbWlzc2libGU9e2ZhbHNlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbXBFeCBJbXBvcnQgLyBFeHBvcnQgcmVxdWlyZXMgYSBicm93c2VyIGltcGxlbWVudGluZyB0aGV7XCIgXCJ9XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dlYi5kZXYvZmlsZS1zeXN0ZW0tYWNjZXNzL1wiPlxuICAgICAgICAgICAgICAgIEZpbGUgU3lzdGVtIEFjY2VzcyBBUElcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQ3VycmVudGx5IG9ubHkgQ2hyb21pdW0gYmFzZWQgYnJvd3NlcnMgbGlrZSBDaHJvbWUsIENocm9taXVtLCBNU1xuICAgICAgICAgICAgICBFZGdlIGFyZSBrbm93biB0byBzdXBwb3J0IHRoaXMgZmVhdHVyZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTZWV7XCIgXCJ9XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Nhbml1c2UuY29tL21kbi1hcGlfd2luZG93X3Nob3dkaXJlY3RvcnlwaWNrZXJcIj5cbiAgICAgICAgICAgICAgICBoZXJlXG4gICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgIHRvIGZpbmQgdGhlIGxhdGVzdCBsaXN0IG9mIGJyb3dzZXJzIHN1cHBvcnRpbmcgdGhleycgJ31cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2ViLmRldi9maWxlLXN5c3RlbS1hY2Nlc3MvXCI+XG4gICAgICAgICAgICAgICAgRmlsZSBTeXN0ZW0gQWNjZXNzIEFQSVxuICAgICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgICBmZWF0dXJlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvY29tcG9uZW50cy5Nb2RhbD5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWlzQ3J5cHRvUmFuZG9tQXZhaWxhYmxlICYmIChcbiAgICAgICAgICA8Y29tcG9uZW50cy5Nb2RhbFxuICAgICAgICAgICAgdGl0bGU9XCJPdWNoIC0geW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIENyeXB0byBBUEkgOi0oXCJcbiAgICAgICAgICAgIGlzRGlzbWlzc2libGU9e2ZhbHNlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbXBFeCBJbXBvcnQgLyBFeHBvcnQgcmVxdWlyZXMgYSBicm93c2VyIGltcGxlbWVudGluZyB0aGV7JyAnfVxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NyeXB0b1wiPlxuICAgICAgICAgICAgICAgIEJyb3dzZXIgQ3J5cHRvIEFQSVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2NvbXBvbmVudHMuTW9kYWw+XG4gICAgICAgICl9XG4gICAgICA8L2NvbXBvbmVudHMuU2xvdEZpbGxQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgZWxlbWVudCBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5pbXBvcnQgY29tcG9uZW50cyBmcm9tIFwiQHdvcmRwcmVzcy9jb21wb25lbnRzXCI7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSBcIkB3b3JkcHJlc3MvYXBpLWZldGNoXCI7XG5pbXBvcnQgdXJsIGZyb20gXCJAd29yZHByZXNzL3VybFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIkB3b3JkcHJlc3MvZGF0YVwiO1xuaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tIFwiQHdvcmRwcmVzcy9pMThuXCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZGVidWdcIjtcbmltcG9ydCB7IGVkaXQsIGNhbmNlbENpcmNsZUZpbGxlZCwgZG93bmxvYWQgfSBmcm9tIFwiQHdvcmRwcmVzcy9pY29uc1wiO1xuaW1wb3J0IEV4cG9ydFByb2ZpbGVTZWxlY3RvciBmcm9tIFwiLi9leHBvcnQtcHJvZmlsZS1zZWxlY3Rvci5tanNcIjtcblxuaW1wb3J0IFJlbmFtZU1vZGFsIGZyb20gXCIuL3JlbmFtZS1tb2RhbC5tanNcIjtcbmltcG9ydCBEZWxldGVNb2RhbCBmcm9tIFwiLi9kZWxldGUtbW9kYWwubWpzXCI7XG5pbXBvcnQgdXNlU2NyZWVuQ29udGV4dCBmcm9tIFwiLi9zY3JlZW4tY29udGV4dC5tanNcIjtcblxuaW1wb3J0IFN0b3JlIGZyb20gXCJAY200YWxsLWltcGV4L3N0b3JlXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcuZGVmYXVsdChcIndwLmltcGV4LmRhc2hib2FyZC5leHBvcnRcIik7XG5kZWJ1ZyhcImxvYWRlZFwiKTtcblxuLy9jb25zdCB7IF9fLCBzcHJpbnRmIH0gPSBpMThuO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBvcnQoKSB7XG4gIGNvbnN0IHsgc2V0dGluZ3MsIGV4cG9ydFByb2ZpbGVzLCBleHBvcnRzIH0gPSBkYXRhLnVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBzZWxlY3QoU3RvcmUuS0VZKTtcbiAgICByZXR1cm4ge1xuICAgICAgc2V0dGluZ3M6IHN0b3JlLmdldFNldHRpbmdzKCksXG4gICAgICBleHBvcnRQcm9maWxlczogc3RvcmUuZ2V0RXhwb3J0UHJvZmlsZXMoKSxcbiAgICAgIGV4cG9ydHM6IHN0b3JlLmdldEV4cG9ydHMoKSxcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBbZXhwb3J0UHJvZmlsZSwgc2V0RXhwb3J0UHJvZmlsZV0gPSBlbGVtZW50LnVzZVN0YXRlKCk7XG5cbiAgZWxlbWVudC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChleHBvcnRQcm9maWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNldEV4cG9ydFByb2ZpbGUoZXhwb3J0UHJvZmlsZXNbMF0pO1xuICAgIH1cbiAgfSwgW2V4cG9ydFByb2ZpbGVzXSk7XG5cbiAgY29uc3Qge1xuICAgIGNyZWF0ZUV4cG9ydDogX2NyZWF0ZUV4cG9ydCxcbiAgICB1cGRhdGVFeHBvcnQsXG4gICAgZGVsZXRlRXhwb3J0LFxuICB9ID0gZGF0YS51c2VEaXNwYXRjaChTdG9yZS5LRVkgLyosIFtdKi8pO1xuXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gZWxlbWVudC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSBlbGVtZW50LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHNjcmVlbkNvbnRleHQgPSB1c2VTY3JlZW5Db250ZXh0KCk7XG5cbiAgLy8gZGVidWcoeyBleHBvcnRQcm9maWxlLCBleHBvcnRQcm9maWxlcyB9KTtcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gZGF0YS51c2VTZWxlY3QoKHNlbGVjdCkgPT4gKHtcbiAgICBjdXJyZW50VXNlcjogc2VsZWN0KFwiY29yZVwiKS5nZXRDdXJyZW50VXNlcigpLFxuICB9KSk7XG5cbiAgY29uc3QgY3JlYXRlRXhwb3J0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNpdGVfdXJsID0gbmV3IFVSTChzZXR0aW5nc1tcInNpdGVfdXJsXCJdKTtcblxuICAgIGNvbnN0IGRhdGUgPSBzY3JlZW5Db250ZXh0LmN1cnJlbnREYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgbmFtZSA9IGAke3NpdGVfdXJsLmhvc3RuYW1lfS0ke2V4cG9ydFByb2ZpbGUubmFtZX0tJHtkYXRlfWA7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBgRXhwb3J0ICcke2V4cG9ydFByb2ZpbGUubmFtZX0nIGNyZWF0ZWQgYnkgdXNlciAnJHtjdXJyZW50VXNlci5uYW1lfScgYXQgJHtkYXRlfWA7XG5cbiAgICBzZXRQcm9ncmVzcyh7XG4gICAgICBjb21wb25lbnQ6IChcbiAgICAgICAgPGNvbXBvbmVudHMuTW9kYWxcbiAgICAgICAgICB0aXRsZT17X18oXCJDcmVhdGluZyBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4ge319XG4gICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImJsb2NraW5nXCJcbiAgICAgICAgPlxuICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgPHByb2dyZXNzIGluZGV0ZXJtaW5hdGU9XCJ0cnVlXCI+PC9wcm9ncmVzcz5cbiAgICAgICAgPC9jb21wb25lbnRzLk1vZGFsPlxuICAgICAgKSxcbiAgICB9KTtcbiAgICBhd2FpdCBfY3JlYXRlRXhwb3J0KGV4cG9ydFByb2ZpbGUsIG5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgICBzZXRQcm9ncmVzcygpO1xuICB9O1xuXG4gIGNvbnN0IG9uRG93bmxvYWRFeHBvcnQgPSBhc3luYyAoX2V4cG9ydCkgPT4ge1xuICAgIGxldCBfZXhwb3J0Rm9sZGVyTmFtZSA9IG51bGw7XG4gICAgLy8gc2hvd0RpcmVjdG9yeVBpY2tlciB3aWxsIHRocm93IGEgRE9NRXhjZXB0aW9uIGluIGNhc2UgdGhlIHVzZXIgcHJlc3NlZCBjYW5jZWxcbiAgICB0cnkge1xuICAgICAgLy8gY29sb25zIG5lZWQgdG8gYmUgcmVwbGFjZWQgb3RoZXJ3aXNlIHNob3dEaXJlY3RvcnlQaWNrZXIgd2lsbCBmYWlsXG4gICAgICBfZXhwb3J0Rm9sZGVyTmFtZSA9IHNjcmVlbkNvbnRleHQubm9ybWFsaXplRmlsZW5hbWUoX2V4cG9ydC5uYW1lKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzZWUgaHR0cHM6Ly93ZWIuZGV2L2ZpbGUtc3lzdGVtLWFjY2Vzcy9cbiAgICBjb25zdCBleHBvcnRzRGlySGFuZGxlID0gYXdhaXQgd2luZG93LnNob3dEaXJlY3RvcnlQaWNrZXIoe1xuICAgICAgLy8gWW91IGNhbiBzdWdnZXN0IGEgZGVmYXVsdCBzdGFydCBkaXJlY3RvcnkgYnkgcGFzc2luZyBhIHN0YXJ0SW4gcHJvcGVydHkgdG8gdGhlIHNob3dTYXZlRmlsZVBpY2tlclxuICAgICAgc3RhcnRJbjogXCJkb3dubG9hZHNcIixcbiAgICAgIG1vZGU6IFwicmVhZHdyaXRlXCIsXG4gICAgICAvLyBJZiBhbiBpZCBpcyBzcGVjaWZpZWQsIHRoZSBmaWxlIHBpY2tlciBpbXBsZW1lbnRhdGlvbiB3aWxsIHJlbWVtYmVyIGEgc2VwYXJhdGUgbGFzdC11c2VkIGRpcmVjdG9yeSBmb3IgcGlja2VycyB3aXRoIHRoYXQgc2FtZSBpZC5cbiAgICAgIGlkOiBcImltcGV4LWV4cG9ydC1kaXJcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4cG9ydERpckhhbmRsZSA9IGF3YWl0IGV4cG9ydHNEaXJIYW5kbGUuZ2V0RGlyZWN0b3J5SGFuZGxlKFxuICAgICAgX2V4cG9ydEZvbGRlck5hbWUsXG4gICAgICB7XG4gICAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApO1xuICAgIGRlYnVnKFwiZG93bmxvYWQgZXhwb3J0ICVvXCIsIF9leHBvcnQpO1xuXG4gICAgY29uc3QgcGF0aCA9IGAke3NldHRpbmdzLmJhc2VfdXJpfS9leHBvcnQvJHtfZXhwb3J0LmlkfS9zbGljZWA7XG5cbiAgICBzZXRQcm9ncmVzcyh7XG4gICAgICBjb21wb25lbnQ6IChcbiAgICAgICAgPGNvbXBvbmVudHMuTW9kYWxcbiAgICAgICAgICB0aXRsZT17X18oXCJEb3dubG9hZGluZyBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4ge319XG4gICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImJsb2NraW5nXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwcm9ncmVzcyBpbmRldGVybWluYXRlPVwidHJ1ZVwiPjwvcHJvZ3Jlc3M+XG4gICAgICAgIDwvY29tcG9uZW50cy5Nb2RhbD5cbiAgICAgICksXG4gICAgfSk7XG5cbiAgICBjb25zdCBpbml0aWFsUmVzcG9uc2UgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgICBwYXRoLFxuICAgICAgLy8gcGFyc2U6IGZhbHNlIGlzIG5lZWRlZCB0byBnZXRhIGFjY2VzcyB0byB0aGUgaGVhZGVyc1xuICAgICAgcGFyc2U6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeF93cF90b3RhbCA9IE51bWJlci5wYXJzZUludChcbiAgICAgIGluaXRpYWxSZXNwb25zZS5oZWFkZXJzLmdldChcIlgtV1AtVG90YWxcIiksXG4gICAgICAxMFxuICAgICk7XG4gICAgY29uc3QgeF93cF90b3RhbF9wYWdlcyA9IE51bWJlci5wYXJzZUludChcbiAgICAgIGluaXRpYWxSZXNwb25zZS5oZWFkZXJzLmdldChcIlgtV1AtVG90YWxQYWdlc1wiKVxuICAgICk7XG5cbiAgICBjb25zdCBzbGljZUNodW5rcyA9IFtcbiAgICAgIHNjcmVlbkNvbnRleHQuc2F2ZVNsaWNlc0NodW5rKGV4cG9ydERpckhhbmRsZSwgaW5pdGlhbFJlc3BvbnNlLmpzb24oKSwgMSksXG4gICAgXTtcbiAgICBmb3IgKGxldCBjaHVuayA9IDI7IGNodW5rIDw9IHhfd3BfdG90YWxfcGFnZXM7IGNodW5rKyspIHtcbiAgICAgIHNsaWNlQ2h1bmtzLnB1c2goXG4gICAgICAgIHNjcmVlbkNvbnRleHQuc2F2ZVNsaWNlc0NodW5rKFxuICAgICAgICAgIGV4cG9ydERpckhhbmRsZSxcbiAgICAgICAgICBhcGlGZXRjaCh7XG4gICAgICAgICAgICBwYXRoOiB1cmwuYWRkUXVlcnlBcmdzKHBhdGgsIHsgcGFnZTogY2h1bmsgfSksXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2h1bmtcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChzbGljZUNodW5rcyk7XG4gICAgc2V0UHJvZ3Jlc3MobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGNvbXBvbmVudHMuUGFuZWxcbiAgICAgICAgY2xhc3NOYW1lPVwiZXhwb3J0XCJcbiAgICAgICAgaGVhZGVyPXtfXyhcIkV4cG9ydFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgID5cbiAgICAgICAgPGNvbXBvbmVudHMuUGFuZWxCb2R5XG4gICAgICAgICAgdGl0bGU9e19fKFwiQ3JlYXRlIHNuYXBzaG90XCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgICAgIG9wZW5lZFxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyZWF0ZS1leHBvcnQtZm9ybVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RXhwb3J0UHJvZmlsZVNlbGVjdG9yXG4gICAgICAgICAgICB2YWx1ZT17ZXhwb3J0UHJvZmlsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRFeHBvcnRQcm9maWxlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8Y29tcG9uZW50cy5CdXR0b25cbiAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlRXhwb3J0fVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFleHBvcnRQcm9maWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXyhcIkNyZWF0ZSBTbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICA8L2NvbXBvbmVudHMuQnV0dG9uPlxuICAgICAgICA8L2NvbXBvbmVudHMuUGFuZWxCb2R5PlxuICAgICAgICB7ZXhwb3J0cy5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGNvbXBvbmVudHMuUGFuZWxCb2R5XG4gICAgICAgICAgICBrZXk9e18uaWR9XG4gICAgICAgICAgICB0aXRsZT17Xy5uYW1lfVxuICAgICAgICAgICAgaW5pdGlhbE9wZW49e2luZGV4ID09PSAwfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsUm93PlxuICAgICAgICAgICAgICA8Y29tcG9uZW50cy5CdXR0b25cbiAgICAgICAgICAgICAgICBpc1NlY29uZGFyeVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRG93bmxvYWRFeHBvcnQoXyl9XG4gICAgICAgICAgICAgICAgaWNvbj17ZG93bmxvYWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7X18oXCJEb3dubG9hZCBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICAgICAgPC9jb21wb25lbnRzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgPGNvbXBvbmVudHMuRHJvcGRvd25NZW51XG4gICAgICAgICAgICAgICAgLy8gaWNvbj17bW9yZVZlcnRpY2FsfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcbiAgICAgICAgICAgICAgICAgIFwiQWRkaXRpb25hbCBhY3Rpb25zIG9uIHRoaXMgZXhwb3J0XCIsXG4gICAgICAgICAgICAgICAgICBcImNtNGFsbC13cC1pbXBleFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjb250cm9scz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogX18oXCJFZGl0XCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBlZGl0LFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUmVuYW1lTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX18oXCJFZGl0IGV4cG9ydFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgZG9TYXZlKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVFeHBvcnQoXy5pZCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IF8sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9fKFwiRGVsZXRlXCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBjYW5jZWxDaXJjbGVGaWxsZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBEZWxldGVNb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfXyhcIkRlbGV0ZSBleHBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfXyhcIkFyZSB5b3UgcmVhbGx5IHN1cmUgdG8gZGVsZXRlIGV4cG9ydFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntfLm5hbWV9PC9jb2RlPj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgZG9EZWxldGUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlRXhwb3J0KF8uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvY29tcG9uZW50cy5QYW5lbFJvdz5cbiAgICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsUm93PlxuICAgICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShfLCBudWxsLCBcIiAgXCIpfTwvcHJlPlxuICAgICAgICAgICAgPC9jb21wb25lbnRzLlBhbmVsUm93PlxuICAgICAgICAgIDwvY29tcG9uZW50cy5QYW5lbEJvZHk+XG4gICAgICAgICkpfVxuICAgICAgPC9jb21wb25lbnRzLlBhbmVsPlxuICAgICAge21vZGFsICYmIDxtb2RhbC5jb21wb25lbnQgey4uLm1vZGFsLnByb3BzfSBvblJlcXVlc3RDbG9zZT17c2V0TW9kYWx9IC8+fVxuICAgICAge3Byb2dyZXNzICYmIChcbiAgICAgICAgPGNvbXBvbmVudHMuRmlsbCBuYW1lPVwicHJvZ3Jlc3NcIiBvblJlcXVlc3RDbG9zZT17KCkgPT4ge319PlxuICAgICAgICAgIHtwcm9ncmVzcy5jb21wb25lbnR9XG4gICAgICAgIDwvY29tcG9uZW50cy5GaWxsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcblxuY29uc3QgY2FuY2VsQ2lyY2xlRmlsbGVkID0gKFxuXHQ8U1ZHIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PFBhdGggZD1cIk0xMiAyMUMxNi45NzA2IDIxIDIxIDE2Ljk3MDYgMjEgMTJDMjEgNy4wMjk0NCAxNi45NzA2IDMgMTIgM0M3LjAyOTQ0IDMgMyA3LjAyOTQ0IDMgMTJDMyAxNi45NzA2IDcuMDI5NDQgMjEgMTIgMjFaTTE1LjUzMDMgOC40Njk2N0MxNS44MjMyIDguNzYyNTYgMTUuODIzMiA5LjIzNzQ0IDE1LjUzMDMgOS41MzAzM0wxMy4wNjA3IDEyTDE1LjUzMDMgMTQuNDY5N0MxNS44MjMyIDE0Ljc2MjYgMTUuODIzMiAxNS4yMzc0IDE1LjUzMDMgMTUuNTMwM0MxNS4yMzc0IDE1LjgyMzIgMTQuNzYyNiAxNS44MjMyIDE0LjQ2OTcgMTUuNTMwM0wxMiAxMy4wNjA3TDkuNTMwMzMgMTUuNTMwM0M5LjIzNzQ0IDE1LjgyMzIgOC43NjI1NiAxNS44MjMyIDguNDY5NjcgMTUuNTMwM0M4LjE3Njc4IDE1LjIzNzQgOC4xNzY3OCAxNC43NjI2IDguNDY5NjcgMTQuNDY5N0wxMC45MzkzIDEyTDguNDY5NjcgOS41MzAzM0M4LjE3Njc4IDkuMjM3NDQgOC4xNzY3OCA4Ljc2MjU2IDguNDY5NjcgOC40Njk2N0M4Ljc2MjU2IDguMTc2NzggOS4yMzc0NCA4LjE3Njc4IDkuNTMwMzMgOC40Njk2N0wxMiAxMC45MzkzTDE0LjQ2OTcgOC40Njk2N0MxNC43NjI2IDguMTc2NzggMTUuMjM3NCA4LjE3Njc4IDE1LjUzMDMgOC40Njk2N1pcIiAvPlxuXHQ8L1NWRz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNhbmNlbENpcmNsZUZpbGxlZDtcbiIsICIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcblxuY29uc3QgY2xvdWRVcGxvYWQgPSAoXG5cdDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cblx0XHQ8UGF0aCBkPVwiTTE3LjMgMTAuMWMwLTIuNS0yLjEtNC40LTQuOC00LjQtMi4yIDAtNC4xIDEuNC00LjYgMy4zaC0uMkM1LjcgOSA0IDEwLjcgNCAxMi44YzAgMi4xIDEuNyAzLjggMy43IDMuOGg5YzEuOCAwIDMuMi0xLjUgMy4yLTMuMy4xLTEuNi0xLjEtMi45LTIuNi0zLjJ6bS0uNSA1LjFoLTR2LTIuNEwxNCAxNGwxLTEtMy0zLTMgMyAxIDEgMS4yLTEuMnYyLjRINy43Yy0xLjIgMC0yLjItMS4xLTIuMi0yLjNzMS0yLjQgMi4yLTIuNEg5bC4zLTEuMWMuNC0xLjMgMS43LTIuMiAzLjItMi4yIDEuOCAwIDMuMyAxLjMgMy4zIDIuOXYxLjNsMS4zLjJjLjguMSAxLjQuOSAxLjQgMS44IDAgMS0uOCAxLjgtMS43IDEuOHpcIiAvPlxuXHQ8L1NWRz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsb3VkVXBsb2FkO1xuIiwgIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBkb3dubG9hZCA9IChcblx0PFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuXHRcdDxQYXRoIGQ9XCJNMTggMTEuM2wtMS0xLjEtNCA0VjNoLTEuNXYxMS4zTDcgMTAuMmwtMSAxLjEgNi4yIDUuOCA1LjgtNS44em0uNSAzLjd2My41aC0xM1YxNUg0djVoMTZ2LTVoLTEuNXpcIiAvPlxuXHQ8L1NWRz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvd25sb2FkO1xuIiwgIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBwZW5jaWwgPSAoXG5cdDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cblx0XHQ8UGF0aCBkPVwiTTIwLjEgNS4xTDE2LjkgMiA2LjIgMTIuN2wtMS4zIDQuNCA0LjUtMS4zTDIwLjEgNS4xek00IDIwLjhoOHYtMS41SDR2MS41elwiIC8+XG5cdDwvU1ZHPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcGVuY2lsO1xuIiwgIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBwZW5jaWwgfSBmcm9tICcuL3BlbmNpbCc7XG5leHBvcnQgZGVmYXVsdCBwZW5jaWw7XG4iLCAiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5cbmNvbnN0IHVwbG9hZCA9IChcblx0PFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuXHRcdDxQYXRoIGQ9XCJNMTguNSAxNXYzLjVIMTNWNi43bDQuNSA0LjEgMS0xLjEtNi4yLTUuOC01LjggNS44IDEgMS4xIDQtNHYxMS43aC02VjE1SDR2NWgxNnYtNXpcIiAvPlxuXHQ8L1NWRz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHVwbG9hZDtcbiIsICJpbXBvcnQgY29tcG9uZW50cyBmcm9tIFwiQHdvcmRwcmVzcy9jb21wb25lbnRzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiQHdvcmRwcmVzcy9kYXRhXCI7XG5pbXBvcnQgZWxlbWVudCBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gXCJAd29yZHByZXNzL2kxOG5cIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiQGNtNGFsbC1pbXBleC9zdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBvcnRQcm9maWxlU2VsZWN0b3IoeyB2YWx1ZSwgb25DaGFuZ2UgfSkge1xuICBjb25zdCB7IGV4cG9ydFByb2ZpbGVzIH0gPSBkYXRhLnVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBzZWxlY3QoU3RvcmUuS0VZKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwb3J0UHJvZmlsZXM6IHN0b3JlLmdldEV4cG9ydFByb2ZpbGVzKCksXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgZXhwb3J0UHJvZmlsZVNlbGVjdFJlZiA9IGVsZW1lbnQudXNlUmVmKCk7XG5cbiAgY29uc3Qgc2V0RXhwb3J0UHJvZmlsZSA9IChleHBvcnRQcm9maWxlTmFtZSA9IG51bGwpID0+IHtcbiAgICBjb25zdCBleHBvcnRQcm9maWxlID0gZXhwb3J0UHJvZmlsZXMuZmluZChcbiAgICAgIChfKSA9PiBfLm5hbWUgPT09IGV4cG9ydFByb2ZpbGVOYW1lXG4gICAgKTtcbiAgICBvbkNoYW5nZShleHBvcnRQcm9maWxlKTtcblxuICAgIGlmKGV4cG9ydFByb2ZpbGVTZWxlY3RSZWYuY3VycmVudCkge1xuICAgICAgaWYgKCFleHBvcnRQcm9maWxlKSB7XG4gICAgICAgIGV4cG9ydFByb2ZpbGVTZWxlY3RSZWYuY3VycmVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgZXhwb3J0UHJvZmlsZVNlbGVjdFJlZi5jdXJyZW50LnRpdGxlID0gZXhwb3J0UHJvZmlsZT8uZGVzY3JpcHRpb24gfHwgXCJcIjtcbiAgICB9XG4gIH07XG5cbiAgZWxlbWVudC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEV4cG9ydFByb2ZpbGUodmFsdWU/Lm5hbWUpO1xuICB9LCBbZXhwb3J0UHJvZmlsZXNdKTtcblxuICBlbGVtZW50LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9yKGNvbnN0IG9wdGlvbiBvZiBleHBvcnRQcm9maWxlU2VsZWN0UmVmLmN1cnJlbnQ/Lm9wdGlvbnMgPz8gW10pIHtcbiAgICAgIGlmKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgb3B0aW9uLnRpdGxlID0gZXhwb3J0UHJvZmlsZXMuZmluZChfID0+IF8ubmFtZSA9PT0gb3B0aW9uLnZhbHVlKT8uZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfVxuICB9LCBbZXhwb3J0UHJvZmlsZXNdKTtcblxuICBjb25zdCBvcHRpb25zID0gWy4uLmV4cG9ydFByb2ZpbGVzXTtcbiAgXG4gIGlmKGV4cG9ydFByb2ZpbGVzLmxlbmd0aCA+IDEpIHtcbiAgICBvcHRpb25zLnVuc2hpZnQoe1xuICAgICAgbmFtZTogZXhwb3J0UHJvZmlsZXMubGVuZ3RoXG4gICAgICA/IF9fKFwiU2VsZWN0IGFuIGV4cG9ydCBwcm9maWxlXCIsIFwiY200YWxsLXdwLWltcGV4XCIpXG4gICAgICA6IF9fKFwiTm8gZXhwb3J0IHByb2ZpbGVzIGZvdW5kXCIpLFxuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxjb21wb25lbnRzLlNlbGVjdENvbnRyb2xcbiAgICAgIHJlZj17ZXhwb3J0UHJvZmlsZVNlbGVjdFJlZn1cbiAgICAgIGRpc2FibGVkPXshZXhwb3J0UHJvZmlsZXMubGVuZ3RofVxuICAgICAgdmFsdWU9e3ZhbHVlPy5uYW1lfVxuICAgICAgb25DaGFuZ2U9e3NldEV4cG9ydFByb2ZpbGV9XG4gICAgICBvcHRpb25zPXtcbiAgICAgICAgb3B0aW9uc1xuICAgICAgICAubWFwKChfKSA9PiAoe1xuICAgICAgICAgIHZhbHVlOiBfLmRpc2FibGVkID8gdW5kZWZpbmVkIDogXy5uYW1lLFxuICAgICAgICAgIGxhYmVsOiBfLm5hbWUsXG4gICAgICAgICAgdGl0bGU6IF8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgZGlzYWJsZWQ6IF8uZGlzYWJsZWQsXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgICAgbGFiZWw9e19fKFwiRXhwb3J0IFByb2ZpbGU6XCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgaGVscD17X18oXG4gICAgICAgIFwiRXhwb3J0IHByb2ZpbGVzIGRlZmluZSB3aGljaCBXb3JkUHJlc3MgZGF0YSBzaG91bGQgYmUgZXh0cmFjdGVkXCIsXG4gICAgICAgIFwiY200YWxsLXdwLWltcGV4XCJcbiAgICAgICl9XG4gICAgPjwvY29tcG9uZW50cy5TZWxlY3RDb250cm9sPlxuICApO1xufVxuIiwgImltcG9ydCBlbGVtZW50IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmltcG9ydCBjb21wb25lbnRzIGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcbmltcG9ydCBkYXRhIGZyb20gXCJAd29yZHByZXNzL2RhdGFcIjtcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSBcIkB3b3JkcHJlc3MvaTE4blwiO1xuaW1wb3J0IHsgZWRpdCB9IGZyb20gXCJAd29yZHByZXNzL2ljb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbmFtZU1vZGFsKHsgdGl0bGUsIGRvU2F2ZSwgaXRlbSwgb25SZXF1ZXN0Q2xvc2UgfSkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBlbGVtZW50LnVzZVN0YXRlKGl0ZW0ubmFtZSk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gZWxlbWVudC51c2VTdGF0ZShpdGVtLmRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBvblNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZG9TYXZlKHsgbmFtZSwgZGVzY3JpcHRpb24gfSk7XG5cbiAgICBvblJlcXVlc3RDbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGNvbXBvbmVudHMuTW9kYWxcbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGljb249e2VkaXR9XG4gICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gb25SZXF1ZXN0Q2xvc2UoKX1cbiAgICA+XG4gICAgICA8Y29tcG9uZW50cy5UZXh0Q29udHJvbFxuICAgICAgICBsYWJlbD17X18oXCJOYW1lXCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgICBoZWxwPXtfXyhcIk5hbWUgc2hvdWxkIGJlIHNob3J0IGFuZCBodW1hbiByZWFkYWJsZVwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXROYW1lfVxuICAgICAgLz5cblxuICAgICAgPGNvbXBvbmVudHMuVGV4dGFyZWFDb250cm9sXG4gICAgICAgIGxhYmVsPXtfXyhcIkRlc2NyaXB0aW9uXCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgICBoZWxwPXtfXyhcbiAgICAgICAgICBcIkRlc2NyaXB0aW9uIG1heSBjb250YWluIG1vcmUgZXhwcmVzc2l2ZSBpbmZvcm1hdGlvbiBkZXNjcmliaW5nIHRoZSBpdGVtXCIsXG4gICAgICAgICAgXCJjbTRhbGwtd3AtaW1wZXhcIixcbiAgICAgICAgKX1cbiAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICBvbkNoYW5nZT17c2V0RGVzY3JpcHRpb259XG4gICAgICAvPlxuXG4gICAgICA8Y29tcG9uZW50cy5CdXR0b25cbiAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICBvbkNsaWNrPXtvblNhdmV9XG4gICAgICAgIGRpc2FibGVkPXtuYW1lID09PSBpdGVtLm5hbWUgJiYgZGVzY3JpcHRpb24gPT09IGl0ZW0uZGVzY3JpcHRpb259XG4gICAgICA+XG4gICAgICAgIFNhdmVcbiAgICAgIDwvY29tcG9uZW50cy5CdXR0b24+XG4gICAgPC9jb21wb25lbnRzLk1vZGFsPlxuICApO1xufVxuIiwgImltcG9ydCBjb21wb25lbnRzIGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNhbmNlbENpcmNsZUZpbGxlZCB9IGZyb20gXCJAd29yZHByZXNzL2ljb25zXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiUmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgdGl0bGUsIGRvRGVsZXRlLCBvblJlcXVlc3RDbG9zZSwgY2hpbGRyZW4gfSkge1xuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkb0RlbGV0ZSgpO1xuXG4gICAgb25SZXF1ZXN0Q2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxjb21wb25lbnRzLk1vZGFsXG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBpY29uPXtjYW5jZWxDaXJjbGVGaWxsZWR9XG4gICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gb25SZXF1ZXN0Q2xvc2UoKX1cbiAgICA+XG4gICAgICA8cD57Y2hpbGRyZW59PC9wPlxuICAgICAgPGNvbXBvbmVudHMuQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaXNEZXN0cnVjdGl2ZSBvbkNsaWNrPXtvbkRlbGV0ZX0+XG4gICAgICAgIERlbGV0ZVxuICAgICAgPC9jb21wb25lbnRzLkJ1dHRvbj5cbiAgICA8L2NvbXBvbmVudHMuTW9kYWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IGVsZW1lbnQgZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IERlYnVnIGZyb20gXCJAY200YWxsLWltcGV4L2RlYnVnXCI7XG5pbXBvcnQgaG9va3MgZnJvbSBcIkB3b3JkcHJlc3MvaG9va3NcIjtcbmltcG9ydCBJbXBleEZpbHRlcnMgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZmlsdGVyc1wiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCJAY200YWxsLWltcGV4L3N0b3JlXCI7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSBcIkB3b3JkcHJlc3MvYXBpLWZldGNoXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiQHdvcmRwcmVzcy9kYXRhXCI7XG5pbXBvcnQgdXJsIGZyb20gXCJAd29yZHByZXNzL3VybFwiO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnLmRlZmF1bHQoXCJ3cC5pbXBleC5kYXNoYm9hcmQuZXhwb3J0XCIpO1xuZGVidWcoXCJsb2FkZWRcIik7XG5cbmNvbnN0IENvbnRleHRQcm92aWRlciA9IGVsZW1lbnQuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTY3JlZW5Db250ZXh0KCkge1xuICByZXR1cm4gZWxlbWVudC51c2VDb250ZXh0KENvbnRleHRQcm92aWRlcik7XG59XG5cblNjcmVlbkNvbnRleHQgPSB7XG4gIG5vcm1hbGl6ZUZpbGVuYW1lKGZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGZpbGVOYW1lXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtejAtOVxcLV9dL2dpLCBcIl9cIilcbiAgICAgICAgLnJlcGxhY2UoLygtKyl8KF8rKS9naSwgKCQpID0+ICRbMF0pXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC8vIGFsbG93IGEgbWF4aW11bSBvZiAzMiBjaGFyYWN0ZXJzXG4gICAgICAgIC5zbGljZSgtMzIpXG4gICAgKTtcbiAgfSxcbiAgY3VycmVudERhdGVTdHJpbmcoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHsoXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0tJHsoXG4gICAgICBcIjBcIiArIGRhdGUuZ2V0RGF0ZSgpXG4gICAgKS5zbGljZSgtMil9LSR7ZGF0ZS5nZXRIb3VycygpfS0ke2RhdGUuZ2V0TWludXRlcygpfS0ke2RhdGUuZ2V0U2Vjb25kcygpfWA7XG4gIH0sXG4gIGFzeW5jIHNhdmVTbGljZXNDaHVuayhleHBvcnREaXJIYW5kbGUsIHJlc3BvbnNlLCBjaHVuaykge1xuICAgIGNvbnN0IHNsaWNlcyA9IGF3YWl0IHJlc3BvbnNlO1xuICAgIGRlYnVnKGBzYXZlU2xpY2VzQ2h1bmsoY2h1bms9JW8pIDogJW9gLCBjaHVuaywgcmVzcG9uc2UpO1xuXG4gICAgLy8gY3JlYXRlIGNodW5rIHN1YiBkaXJlY3RvcnlcbiAgICBjb25zdCBjaHVua0RpckhhbmRsZSA9IGF3YWl0IGV4cG9ydERpckhhbmRsZS5nZXREaXJlY3RvcnlIYW5kbGUoXG4gICAgICBgY2h1bmstJHtjaHVuay50b1N0cmluZygpLnBhZFN0YXJ0KDQsIFwiMFwiKX1gLFxuICAgICAgeyBjcmVhdGU6IHRydWUgfVxuICAgICk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICBzbGljZXMubWFwKGFzeW5jIChzbGljZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2xpY2VGaWxlSGFuZGxlID0gYXdhaXQgY2h1bmtEaXJIYW5kbGUuZ2V0RmlsZUhhbmRsZShcbiAgICAgICAgICBgc2xpY2UtJHtpbmRleC50b1N0cmluZygpLnBhZFN0YXJ0KDQsIFwiMFwiKX0uanNvbmAsXG4gICAgICAgICAgeyBjcmVhdGU6IHRydWUgfVxuICAgICAgICApO1xuXG4gICAgICAgIHNsaWNlID0gYXdhaXQgaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgICAgICAgIEltcGV4RmlsdGVycy5TTElDRV9SRVNUX1VOTUFSU0hBTCxcbiAgICAgICAgICBJbXBleEZpbHRlcnMuTkFNRVNQQUNFLFxuICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGNodW5rRGlySGFuZGxlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgRmlsZVN5c3RlbVdyaXRhYmxlRmlsZVN0cmVhbSB0byB3cml0ZSB0by5cbiAgICAgICAgY29uc3Qgd3JpdGFibGUgPSBhd2FpdCBzbGljZUZpbGVIYW5kbGUuY3JlYXRlV3JpdGFibGUoKTtcbiAgICAgICAgLy8gV3JpdGUgdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIHRvIHRoZSBzdHJlYW0uXG4gICAgICAgIGF3YWl0IHdyaXRhYmxlLndyaXRlKEpTT04uc3RyaW5naWZ5KHNsaWNlLCBudWxsLCBcIiAgXCIpKTtcbiAgICAgICAgZGVidWcoXCJzbGljZSg9JW8pID0gJW9cIiwgaW5kZXgsIHNsaWNlKTtcbiAgICAgICAgLy8gQ2xvc2UgdGhlIGZpbGUgYW5kIHdyaXRlIHRoZSBjb250ZW50cyB0byBkaXNrLlxuICAgICAgICBhd2FpdCB3cml0YWJsZS5jbG9zZSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9LFxuICBhc3luYyBfZ2V0U2xpY2VGaWxlc1RvSW1wb3J0KGltcG9ydERpckhhbmRsZSkge1xuICAgIGNvbnN0IHNsaWNlcyA9IFtdO1xuICAgIGZvciBhd2FpdCAobGV0IHNsaWNlQ2h1bmtEaXJlY3RvcnlIYW5kbGUgb2YgaW1wb3J0RGlySGFuZGxlLnZhbHVlcygpKSB7XG4gICAgICBpZiAoc2xpY2VDaHVua0RpcmVjdG9yeUhhbmRsZS5raW5kID09PSBcImRpcmVjdG9yeVwiKSB7XG4gICAgICAgIGZvciBhd2FpdCAobGV0IHNsaWNlRmlsZUhhbmRsZSBvZiBzbGljZUNodW5rRGlyZWN0b3J5SGFuZGxlLnZhbHVlcygpKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2xpY2VGaWxlSGFuZGxlLmtpbmQgPT09IFwiZmlsZVwiICYmXG4gICAgICAgICAgICBzbGljZUZpbGVIYW5kbGUubmFtZS5tYXRjaCgvXnNsaWNlLVxcZCtcXC5qc29uJC8pXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzbGljZXMucHVzaCh7XG4gICAgICAgICAgICAgIGZpbGVIYW5kbGU6IHNsaWNlRmlsZUhhbmRsZSxcbiAgICAgICAgICAgICAgZGlySGFuZGxlOiBzbGljZUNodW5rRGlyZWN0b3J5SGFuZGxlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2xpY2VzLnNvcnQoKGwsIHIpID0+IHtcbiAgICAgIGNvbnN0IGN2YWwgPSBsLmRpckhhbmRsZS5uYW1lLmxvY2FsZUNvbXBhcmUoci5kaXJIYW5kbGUubmFtZSk7XG5cbiAgICAgIGlmIChjdmFsID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsLmZpbGVIYW5kbGUubmFtZS5sb2NhbGVDb21wYXJlKHIuZmlsZUhhbmRsZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN2YWw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2xpY2VzO1xuICB9LFxuICBhc3luYyBfdXBsb2FkU2xpY2VzKF9pbXBvcnQsIHNsaWNlRmlsZXMpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGRhdGEuc2VsZWN0KFN0b3JlLktFWSkuZ2V0U2V0dGluZ3MoKTtcbiAgICBjb25zdCBwYXRoID0gYCR7c2V0dGluZ3MuYmFzZV91cml9L2ltcG9ydC8ke19pbXBvcnQuaWR9L3NsaWNlYDtcblxuICAgIGNvbnN0IHNsaWNlVXBsb2FkcyA9IHNsaWNlRmlsZXMubWFwKFxuICAgICAgYXN5bmMgKHsgZmlsZUhhbmRsZSwgZGlySGFuZGxlIH0sIHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGxldCBzbGljZSA9IEpTT04ucGFyc2UoYXdhaXQgKGF3YWl0IGZpbGVIYW5kbGUuZ2V0RmlsZSgpKS50ZXh0KCkpO1xuXG4gICAgICAgIHNsaWNlID0gYXdhaXQgaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgICAgICAgIEltcGV4RmlsdGVycy5TTElDRV9SRVNUX1VQTE9BRCxcbiAgICAgICAgICBJbXBleEZpbHRlcnMuTkFNRVNQQUNFLFxuICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgIHBhcnNlSW50KGZpbGVIYW5kbGUubmFtZS5tYXRjaCgvXnNsaWNlLShcXGQrKVxcLmpzb24kLylbMV0pLFxuICAgICAgICAgIGRpckhhbmRsZSxcbiAgICAgICAgICBmb3JtRGF0YVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzbGljZSkge1xuICAgICAgICAgIGRlYnVnKFwidXBsb2FkICVvXCIsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgZmlsZTogZmlsZUhhbmRsZS5uYW1lLFxuICAgICAgICAgICAgZGlyOiBkaXJIYW5kbGUubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzbGljZVwiLCBKU09OLnN0cmluZ2lmeShzbGljZSwgbnVsbCwgXCIgIFwiKSk7XG5cbiAgICAgICAgICByZXR1cm4gYXBpRmV0Y2goe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHBhdGg6IHVybC5hZGRRdWVyeUFyZ3MocGF0aCwgeyBwb3NpdGlvbiB9KSxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuXG4gICAgICAgICAgICBwYXJzZTogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoc2xpY2VVcGxvYWRzKTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNjcmVlbkNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFByb3ZpZGVyLlByb3ZpZGVyIHZhbHVlPXtTY3JlZW5Db250ZXh0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHRQcm92aWRlci5Qcm92aWRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgZWxlbWVudCBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5pbXBvcnQgY29tcG9uZW50cyBmcm9tIFwiQHdvcmRwcmVzcy9jb21wb25lbnRzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiQHdvcmRwcmVzcy9kYXRhXCI7XG5pbXBvcnQgdXJsIGZyb20gXCJAd29yZHByZXNzL3VybFwiO1xuaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tIFwiQHdvcmRwcmVzcy9pMThuXCI7XG5pbXBvcnQgaG9va3MgZnJvbSBcIkB3b3JkcHJlc3MvaG9va3NcIjtcbmltcG9ydCBJbXBleEZpbHRlcnMgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZmlsdGVyc1wiO1xuaW1wb3J0IERlYnVnIGZyb20gXCJAY200YWxsLWltcGV4L2RlYnVnXCI7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSBcIkB3b3JkcHJlc3MvYXBpLWZldGNoXCI7XG5pbXBvcnQge1xuICBlZGl0LFxuICBjYW5jZWxDaXJjbGVGaWxsZWQsXG4gIHVwbG9hZCxcbiAgY2xvdWRVcGxvYWQsXG59IGZyb20gXCJAd29yZHByZXNzL2ljb25zXCI7XG5pbXBvcnQgUmVuYW1lTW9kYWwgZnJvbSBcIi4vcmVuYW1lLW1vZGFsLm1qc1wiO1xuaW1wb3J0IERlbGV0ZU1vZGFsIGZyb20gXCIuL2RlbGV0ZS1tb2RhbC5tanNcIjtcbmltcG9ydCB1c2VTY3JlZW5Db250ZXh0IGZyb20gXCIuL3NjcmVlbi1jb250ZXh0Lm1qc1wiO1xuaW1wb3J0IEltcG9ydFByb2ZpbGVTZWxlY3RvciBmcm9tIFwiLi9pbXBvcnQtcHJvZmlsZS1zZWxlY3Rvci5tanNcIjtcblxuaW1wb3J0IFN0b3JlIGZyb20gXCJAY200YWxsLWltcGV4L3N0b3JlXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcuZGVmYXVsdChcIndwLmltcGV4LmRhc2hib2FyZC5pbXBvcnRcIik7XG5kZWJ1ZyhcImxvYWRlZFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wb3J0KCkge1xuICAvLyBAVE9ETzogYWRkIGRyYWduIGRyb3Agc3VwcG9ydCBmb3IgdXBsb2FkaW5nIGFuIGV4cG9ydCA/XG4gIC8vIGh0dHBzOi8vbWVkaXVtLmNvbS9ANjUwZWdvci9zaW1wbGUtZHJhZy1hbmQtZHJvcC1maWxlLXVwbG9hZC1pbi1yZWFjdC0yY2I0MDlkODg5MjlcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RhdGFUcmFuc2Zlckl0ZW0vZ2V0QXNGaWxlU3lzdGVtSGFuZGxlXG4gIC8vIGh0dHBzOi8vd2ljZy5naXRodWIuaW8vZmlsZS1zeXN0ZW0tYWNjZXNzLyNkcmFnLWFuZC1kcm9wXG5cbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gZGF0YS51c2VTZWxlY3QoKHNlbGVjdCkgPT4gKHtcbiAgICBjdXJyZW50VXNlcjogc2VsZWN0KFwiY29yZVwiKS5nZXRDdXJyZW50VXNlcigpLFxuICB9KSk7XG5cbiAgY29uc3QgeyBzZXR0aW5ncywgaW1wb3J0UHJvZmlsZXMsIGltcG9ydHMgfSA9IGRhdGEudXNlU2VsZWN0KChzZWxlY3QpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHNlbGVjdChTdG9yZS5LRVkpO1xuICAgIHJldHVybiB7XG4gICAgICBzZXR0aW5nczogc3RvcmUuZ2V0U2V0dGluZ3MoKSxcbiAgICAgIGltcG9ydFByb2ZpbGVzOiBzdG9yZS5nZXRJbXBvcnRQcm9maWxlcygpLFxuICAgICAgaW1wb3J0czogc3RvcmUuZ2V0SW1wb3J0cygpLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHsgY3JlYXRlSW1wb3J0LCB1cGRhdGVJbXBvcnQsIGRlbGV0ZUltcG9ydCwgY29uc3VtZUltcG9ydCB9ID1cbiAgICBkYXRhLnVzZURpc3BhdGNoKFN0b3JlLktFWSAvKiwgW10qLyk7XG5cbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSBlbGVtZW50LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IGVsZW1lbnQudXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgc2NyZWVuQ29udGV4dCA9IHVzZVNjcmVlbkNvbnRleHQoKTtcblxuICBjb25zdCBbaW1wb3J0UHJvZmlsZSwgc2V0SW1wb3J0UHJvZmlsZV0gPSBlbGVtZW50LnVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW2NsZWFudXBDb250ZW50LCBzZXRDbGVhbnVwQ29udGVudF0gPSBlbGVtZW50LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY2xlYW51cE1lZGlhLCBzZXRDbGVhbnVwTWVkaWFdID0gZWxlbWVudC51c2VTdGF0ZSh0cnVlKTtcblxuICBlbGVtZW50LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGltcG9ydFByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2V0SW1wb3J0UHJvZmlsZShpbXBvcnRQcm9maWxlc1swXSk7XG4gICAgfVxuICB9LCBbaW1wb3J0UHJvZmlsZXNdKTtcblxuICBjb25zdCBvbkNvbnN1bWVJbXBvcnQgPSBhc3luYyAoX2ltcG9ydCkgPT4ge1xuICAgIGRlYnVnKFwib25Db25zdW1lSW1wb3J0KCVvKVwiLCBfaW1wb3J0KTtcblxuICAgIHNldFByb2dyZXNzKHtcbiAgICAgIGNvbXBvbmVudDogKFxuICAgICAgICA8Y29tcG9uZW50cy5Nb2RhbFxuICAgICAgICAgIHRpdGxlPXtfXyhcIkltcG9ydGluZyBkYXRhIGludG8gV29yZFByZXNzIC4uLlwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4ge319XG4gICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImJsb2NraW5nXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwcm9ncmVzcyBpbmRldGVybWluYXRlPVwidHJ1ZVwiPjwvcHJvZ3Jlc3M+XG4gICAgICAgIDwvY29tcG9uZW50cy5Nb2RhbD5cbiAgICAgICksXG4gICAgfSk7XG5cbiAgICBhd2FpdCBjb25zdW1lSW1wb3J0KF9pbXBvcnQuaWQsIHtcbiAgICAgICAgLy8gQHNlZSBQSFAgY2xhc3MgSW1wZXhFeHBvcnQ6Ok9QVElPTl9DTEVBTlVQX0NPTlRFTlRTXG4gICAgICAgICdpbXBleC1pbXBvcnQtb3B0aW9uLWNsZWFudXBfY29udGVudHMnIDogY2xlYW51cENvbnRlbnQsXG4gICAgICB9LFxuICAgICAgbnVsbCxcbiAgICAgIG51bGxcbiAgICApO1xuXG4gICAgc2V0UHJvZ3Jlc3MoKTtcbiAgfTtcblxuICBjb25zdCBvblVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgaW1wb3J0RGlySGFuZGxlID0gbnVsbDtcbiAgICAvLyBzaG93RGlyZWN0b3J5UGlja2VyIHdpbGwgdGhyb3cgYSBET01FeGNlcHRpb24gaW4gY2FzZSB0aGUgdXNlciBwcmVzc2VkIGNhbmNlbFxuICAgIHRyeSB7XG4gICAgICAvLyBzZWUgaHR0cHM6Ly93ZWIuZGV2L2ZpbGUtc3lzdGVtLWFjY2Vzcy9cbiAgICAgIGltcG9ydERpckhhbmRsZSA9IGF3YWl0IHdpbmRvdy5zaG93RGlyZWN0b3J5UGlja2VyKHtcbiAgICAgICAgLy8gWW91IGNhbiBzdWdnZXN0IGEgZGVmYXVsdCBzdGFydCBkaXJlY3RvcnkgYnkgcGFzc2luZyBhIHN0YXJ0SW4gcHJvcGVydHkgdG8gdGhlIHNob3dTYXZlRmlsZVBpY2tlclxuICAgICAgICBzdGFydEluOiBcImRvd25sb2Fkc1wiLFxuICAgICAgICBpZDogXCJpbXBleC1pbXBvcnQtZGlyXCIsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWJ1ZyhcInVwbG9hZCBleHBvcnQgJW9cIiwgaW1wb3J0RGlySGFuZGxlLm5hbWUpO1xuXG4gICAgY29uc3QgZGF0ZSA9IHNjcmVlbkNvbnRleHQuY3VycmVudERhdGVTdHJpbmcoKTtcbiAgICBjb25zdCBuYW1lID0gaW1wb3J0RGlySGFuZGxlLm5hbWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBgSW1wb3J0ICcke2ltcG9ydERpckhhbmRsZS5uYW1lfScgY3JlYXRlZCBieSB1c2VyICcke2N1cnJlbnRVc2VyLm5hbWV9JyBhdCAke2RhdGV9YDtcblxuICAgIHNldFByb2dyZXNzKHtcbiAgICAgIGNvbXBvbmVudDogKFxuICAgICAgICA8Y29tcG9uZW50cy5Nb2RhbFxuICAgICAgICAgIHRpdGxlPXtfXyhcIlVwbG9hZGluZyBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4ge319XG4gICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImJsb2NraW5nXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwcm9ncmVzcyBpbmRldGVybWluYXRlPVwidHJ1ZVwiPjwvcHJvZ3Jlc3M+XG4gICAgICAgIDwvY29tcG9uZW50cy5Nb2RhbD5cbiAgICAgICksXG4gICAgfSk7XG5cbiAgICBjb25zdCBfaW1wb3J0ID0gKGF3YWl0IGNyZWF0ZUltcG9ydChuYW1lLCBkZXNjcmlwdGlvbiwgaW1wb3J0UHJvZmlsZSwge30pKVxuICAgICAgLnBheWxvYWQ7XG5cbiAgICBjb25zdCBzbGljZUZpbGVzID0gYXdhaXQgc2NyZWVuQ29udGV4dC5fZ2V0U2xpY2VGaWxlc1RvSW1wb3J0KGltcG9ydERpckhhbmRsZSk7XG5cbiAgICBjb25zdCBmaW5pc2hlZCA9IGF3YWl0IHNjcmVlbkNvbnRleHQuX3VwbG9hZFNsaWNlcyhfaW1wb3J0LCBzbGljZUZpbGVzKTtcbiAgICBzZXRQcm9ncmVzcygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxjb21wb25lbnRzLlBhbmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImltcG9ydFwiXG4gICAgICAgIGhlYWRlcj17X18oXCJJbXBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICA+XG4gICAgICAgIDxjb21wb25lbnRzLlBhbmVsQm9keVxuICAgICAgICAgIHRpdGxlPXtfXyhcIlVwbG9hZCBzbmFwc2hvdCB0byBXb3JkUHJlc3NcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgb3BlbmVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwidXBsb2FkLWltcG9ydC1mb3JtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbXBvcnRQcm9maWxlU2VsZWN0b3JcbiAgICAgICAgICAgIHZhbHVlPXtpbXBvcnRQcm9maWxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldEltcG9ydFByb2ZpbGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Y29tcG9uZW50cy5CdXR0b25cbiAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgb25DbGljaz17b25VcGxvYWR9XG4gICAgICAgICAgICBpY29uPXt1cGxvYWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17IWltcG9ydFByb2ZpbGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKFwiVXBsb2FkIHNuYXBzaG90XCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgICAgIDwvY29tcG9uZW50cy5CdXR0b24+XG5cbiAgICAgICAgPC9jb21wb25lbnRzLlBhbmVsQm9keT5cbiAgICAgICAgPGNvbXBvbmVudHMuUGFuZWxCb2R5XG4gICAgICAgICAgdGl0bGU9e19fKFwiSW1wb3J0IG9wdGlvbnNcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgb3BlbmVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1wb3J0LW9wdGlvbnMtZm9ybVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Y29tcG9uZW50cy5Ub2dnbGVDb250cm9sXG4gICAgICAgICAgICBoZWxwPXsgY2xlYW51cENvbnRlbnQgPyBfXyhcIkNsZWFuIHVwIGV4aXN0aW5nIHBvc3QsIHBhZ2UsIGJsb2NrIHBhdHRlcm4sIG5hdl9tZW51IGFuIHJldXNhYmxlIGJsb2NrIGl0ZW1zXCIsIFwiY200YWxsLXdwLWltcGV4XCIpIDogX18oXCJLZWVwIGV4aXN0aW5nIHBvc3QsIHBhZ2UsIGJsb2NrIHBhdHRlcm4sIG5hdl9tZW51IGFuIHJldXNhYmxlIGJsb2NrIGl0ZW1zLlwiLCBcImNtNGFsbC13cC1pbXBleFwiKSB9XG4gICAgICAgICAgICBjaGVja2VkPXsgY2xlYW51cENvbnRlbnQgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBzZXRDbGVhbnVwQ29udGVudCB9XG4gICAgICAgICAgICBsYWJlbD17X18oXCJSZW1vdmUgZXhpc3RpbmcgY29udGVudCBiZWZvcmUgaW1wb3J0aW5nIHVwbG9hZGVkIHNuYXBzaG90XCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICA8L2NvbXBvbmVudHMuVG9nZ2xlQ29udHJvbD5cbiAgICAgICAgICA8Y29tcG9uZW50cy5Ub2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgaGVscD17IGNsZWFudXBNZWRpYSA/IF9fKFwiQ2xlYW4gdXAgZXhpc3RpbmcgbWVkaWEgbGlrZSBpbWFnZXMgYW5kIHZpZGVvcyAobG9jYXRlZCBhdCBXb3JkUHJlc3MgdXBsb2FkcylcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIikgOiBfXyhcIktlZXAgZXhpc3RpbmcgbWVkaWEgaXRlbXMuIE1lZGlhIG1pZ2h0IGJlIHBhcnRseSBvdmVyd3JpdHRlbiBieSBleHBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIikgfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBjbGVhbnVwTWVkaWEgfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXsgIWltcG9ydHMubGVuZ3RoIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHNldENsZWFudXBNZWRpYSB9XG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiUmVtb3ZlIGV4aXN0aW5nIG1lZGlhIGJlZm9yZSBpbXBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICA8L2NvbXBvbmVudHMuVG9nZ2xlQ29udHJvbD5cbiAgICAgICAgPC9jb21wb25lbnRzLlBhbmVsQm9keT5cbiAgICAgICAge2ltcG9ydHMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsQm9keVxuICAgICAgICAgICAga2V5PXtfLmlkfVxuICAgICAgICAgICAgdGl0bGU9e18ubmFtZX1cbiAgICAgICAgICAgIGluaXRpYWxPcGVuPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y29tcG9uZW50cy5QYW5lbFJvdz5cbiAgICAgICAgICAgICAgPGNvbXBvbmVudHMuQnV0dG9uXG4gICAgICAgICAgICAgICAgaXNEZXN0cnVjdGl2ZVxuICAgICAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29uc3VtZUltcG9ydChfKX1cbiAgICAgICAgICAgICAgICBpY29uPXtjbG91ZFVwbG9hZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtfXyhcIkltcG9ydCB1cGxvYWRlZCBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICAgICAgPC9jb21wb25lbnRzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgPGNvbXBvbmVudHMuRHJvcGRvd25NZW51XG4gICAgICAgICAgICAgICAgLy8gaWNvbj17bW9yZVZlcnRpY2FsfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcbiAgICAgICAgICAgICAgICAgIFwiQWRkaXRpb25hbCBhY3Rpb25zIG9uIHRoaXMgaW1wb3J0XCIsXG4gICAgICAgICAgICAgICAgICBcImNtNGFsbC13cC1pbXBleFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjb250cm9scz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogX18oXCJFZGl0XCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBlZGl0LFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUmVuYW1lTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX18oXCJFZGl0IGltcG9ydCBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgZG9TYXZlKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVJbXBvcnQoXy5pZCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IF8sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9fKFwiRGVsZXRlXCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBjYW5jZWxDaXJjbGVGaWxsZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBEZWxldGVNb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfXyhcIkRlbGV0ZSBpbXBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfXyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHJlYWxseSBzdXJlIHRvIGRlbGV0ZSBpbXBvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbTRhbGwtd3AtaW1wZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntfLm5hbWV9PC9jb2RlPj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgZG9EZWxldGUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlSW1wb3J0KF8uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvY29tcG9uZW50cy5QYW5lbFJvdz5cbiAgICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsUm93PlxuICAgICAgICAgICAgICA8cHJlIHN0eWxlPXt7IG92ZXJmbG93OiBcImF1dG9cIiB9fT5cbiAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoXywgbnVsbCwgXCIgIFwiKX1cbiAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICA8L2NvbXBvbmVudHMuUGFuZWxSb3c+XG4gICAgICAgICAgPC9jb21wb25lbnRzLlBhbmVsQm9keT5cbiAgICAgICAgKSl9XG4gICAgICA8L2NvbXBvbmVudHMuUGFuZWw+XG4gICAgICB7bW9kYWwgJiYgPG1vZGFsLmNvbXBvbmVudCB7Li4ubW9kYWwucHJvcHN9IG9uUmVxdWVzdENsb3NlPXtzZXRNb2RhbH0gLz59XG5cbiAgICAgIHtwcm9ncmVzcyAmJiAoXG4gICAgICAgIDxjb21wb25lbnRzLkZpbGwgbmFtZT1cInByb2dyZXNzXCIgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHt9fT5cbiAgICAgICAgICB7cHJvZ3Jlc3MuY29tcG9uZW50fVxuICAgICAgICA8L2NvbXBvbmVudHMuRmlsbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBcIkB3b3JkcHJlc3MvY29tcG9uZW50c1wiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIkB3b3JkcHJlc3MvZGF0YVwiO1xuaW1wb3J0IGVsZW1lbnQgZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCJAY200YWxsLWltcGV4L3N0b3JlXCI7XG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gXCJAd29yZHByZXNzL2kxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wb3J0UHJvZmlsZVNlbGVjdG9yKHsgdmFsdWUsIG9uQ2hhbmdlIH0pIHtcbiAgY29uc3QgeyBpbXBvcnRQcm9maWxlcyB9ID0gZGF0YS51c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gc2VsZWN0KFN0b3JlLktFWSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGltcG9ydFByb2ZpbGVzOiBzdG9yZS5nZXRJbXBvcnRQcm9maWxlcygpLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IGltcG9ydFByb2ZpbGVTZWxlY3RSZWYgPSBlbGVtZW50LnVzZVJlZigpO1xuXG4gIGNvbnN0IHNldEltcG9ydFByb2ZpbGUgPSAoaW1wb3J0UHJvZmlsZU5hbWUgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgaW1wb3J0UHJvZmlsZSA9IGltcG9ydFByb2ZpbGVzLmZpbmQoXG4gICAgICAoXykgPT4gXy5uYW1lID09PSBpbXBvcnRQcm9maWxlTmFtZVxuICAgICk7XG4gICAgb25DaGFuZ2UoaW1wb3J0UHJvZmlsZSk7XG5cbiAgICBpZihpbXBvcnRQcm9maWxlU2VsZWN0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlmICghaW1wb3J0UHJvZmlsZSkge1xuICAgICAgICBpbXBvcnRQcm9maWxlU2VsZWN0UmVmLmN1cnJlbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGltcG9ydFByb2ZpbGVTZWxlY3RSZWYuY3VycmVudC50aXRsZSA9IGltcG9ydFByb2ZpbGU/LmRlc2NyaXB0aW9uIHx8IFwiXCI7XG4gICAgfVxuICB9O1xuXG4gIGVsZW1lbnQudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbXBvcnRQcm9maWxlKHZhbHVlPy5uYW1lKTtcbiAgfSwgW2ltcG9ydFByb2ZpbGVzXSk7XG5cbiAgZWxlbWVudC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvcihjb25zdCBvcHRpb24gb2YgaW1wb3J0UHJvZmlsZVNlbGVjdFJlZi5jdXJyZW50Py5vcHRpb25zID8/IFtdKSB7XG4gICAgICBpZighb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgIG9wdGlvbi50aXRsZSA9IGltcG9ydFByb2ZpbGVzLmZpbmQoXyA9PiBfLm5hbWUgPT09IG9wdGlvbi52YWx1ZSk/LmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2ltcG9ydFByb2ZpbGVzXSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IFsuLi5pbXBvcnRQcm9maWxlc107XG5cbiAgaWYoaW1wb3J0UHJvZmlsZXMubGVuZ3RoID4gMSkge1xuICAgIG9wdGlvbnMudW5zaGlmdChcbiAgICAgIHtcbiAgICAgICAgbmFtZTogaW1wb3J0UHJvZmlsZXMubGVuZ3RoXG4gICAgICAgICAgPyBfXyhcIlNlbGVjdCBhbiBpbXBvcnQgcHJvZmlsZVwiLCBcImNtNGFsbC13cC1pbXBleFwiKVxuICAgICAgICAgIDogX18oXCJObyBpbXBvcnQgcHJvZmlsZXMgZm91bmRcIiksXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx3cC5jb21wb25lbnRzLlNlbGVjdENvbnRyb2xcbiAgICAgIHJlZj17aW1wb3J0UHJvZmlsZVNlbGVjdFJlZn1cbiAgICAgIGRpc2FibGVkPXshaW1wb3J0UHJvZmlsZXMubGVuZ3RofVxuICAgICAgbGFiZWw9e19fKFwiSW1wb3J0IFByb2ZpbGU6XCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgdmFsdWU9e3ZhbHVlPy5uYW1lfVxuICAgICAgb25DaGFuZ2U9e3NldEltcG9ydFByb2ZpbGV9XG4gICAgICBvcHRpb25zPXtcbiAgICAgICAgb3B0aW9uc1xuICAgICAgICAubWFwKChfKSA9PiAoe1xuICAgICAgICAgIHZhbHVlOiBfLmRpc2FibGVkID8gdW5kZWZpbmVkIDogXy5uYW1lLFxuICAgICAgICAgIGxhYmVsOiBfLm5hbWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IF8uZGlzYWJsZWQsXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgICAgaGVscD17X18oXG4gICAgICAgIFwiSW1wb3J0IHByb2ZpbGVzIGRlZmluZSB3aGljaCBXb3JkUHJlc3MgZGF0YSBzaG91bGQgYmUgY29uc3VtZWRcIixcbiAgICAgICAgXCJjbTRhbGwtd3AtaW1wZXhcIlxuICAgICAgKX1cbiAgICA+PC93cC5jb21wb25lbnRzLlNlbGVjdENvbnRyb2w+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHO0FBQUE7QUFBQTs7O0FDQTNCO0FBQUE7QUFBQSxhQUFPLFVBQVUsR0FB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QSxNQUFDLG1CQUFBQSxRQUFXO0FBQUEsTUFBWDtBQUFBLFFBQ0MsT0FBTTtBQUFBLFFBQ04sZUFBZTtBQUFBO0FBQUEsTUFFZixnREFBQyxXQUFFLDZEQUN5RCxLQUMxRCxnREFBQyxPQUFFLE1BQUssNkRBQTBELG9CQUVsRSxHQUFJLEdBRU47QUFBQSxJQUNGLENBRUosQ0FDRjtBQUFBLEVBRUo7OztBRHRSQSxNQUFNSSxTQUFRLGNBQUFDLFFBQU0sUUFBUSxvQkFBb0I7QUFDaEQsRUFBQUQsT0FBTSxRQUFRO0FBR2QsTUFBSSxDQUFDLFNBQVMsY0FBYyxzQkFBc0IsR0FBRztBQUNuRCxxQkFBQUUsUUFBUTtBQUFBLE1BQ04sZ0RBQUMsNkJBQ0MsZ0RBQUMsb0JBQU8sQ0FDVjtBQUFBLE1BQ0EsU0FBUyxlQUFlLG9DQUFvQztBQUFBLElBQzlEO0FBQUEsRUFDRjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2RlYnVnIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9jb21wb25lbnRzIiwgImltcG9ydF9kYXRhIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9kZWJ1ZyIsICJpbXBvcnRfc3RvcmUiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2FwaV9mZXRjaCIsICJpbXBvcnRfdXJsIiwgImltcG9ydF9kYXRhIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9kZWJ1ZyIsICJjYW5jZWxDaXJjbGVGaWxsZWQiLCAiaW1wb3J0X3ByaW1pdGl2ZXMiLCAiY2xvdWRVcGxvYWQiLCAiaW1wb3J0X3ByaW1pdGl2ZXMiLCAiZG93bmxvYWQiLCAiaW1wb3J0X3ByaW1pdGl2ZXMiLCAicGVuY2lsIiwgInBlbmNpbCIsICJpbXBvcnRfcHJpbWl0aXZlcyIsICJ1cGxvYWQiLCAiaW1wb3J0X2VsZW1lbnQiLCAiZGF0YSIsICJTdG9yZSIsICJlbGVtZW50IiwgImNvbXBvbmVudHMiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2RhdGEiLCAiaW1wb3J0X2kxOG4iLCAiZWxlbWVudCIsICJjb21wb25lbnRzIiwgImltcG9ydF9jb21wb25lbnRzIiwgImNvbXBvbmVudHMiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X3N0b3JlIiwgImltcG9ydF9kYXRhIiwgIkRlYnVnIiwgImVsZW1lbnQiLCAiaG9va3MiLCAiSW1wZXhGaWx0ZXJzIiwgImRhdGEiLCAiU3RvcmUiLCAiYXBpRmV0Y2giLCAidXJsIiwgImltcG9ydF9zdG9yZSIsICJkZWJ1ZyIsICJEZWJ1ZyIsICJkYXRhIiwgIlN0b3JlIiwgImVsZW1lbnQiLCAiY29tcG9uZW50cyIsICJhcGlGZXRjaCIsICJ1cmwiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2RhdGEiLCAiaW1wb3J0X3VybCIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfaG9va3MiLCAiaW1wb3J0X2ZpbHRlcnMiLCAiaW1wb3J0X2RlYnVnIiwgImltcG9ydF9hcGlfZmV0Y2giLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2RhdGEiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X3N0b3JlIiwgImltcG9ydF9pMThuIiwgImRhdGEiLCAiU3RvcmUiLCAiZWxlbWVudCIsICJpbXBvcnRfc3RvcmUiLCAiZGVidWciLCAiRGVidWciLCAiZGF0YSIsICJTdG9yZSIsICJlbGVtZW50IiwgImNvbXBvbmVudHMiLCAiZGVidWciLCAiRGVidWciLCAiY29tcG9uZW50cyIsICJkYXRhIiwgIlN0b3JlIiwgImVsZW1lbnQiLCAiZGVidWciLCAiRGVidWciLCAiZWxlbWVudCJdCn0K
