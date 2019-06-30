/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
! function () {
    var a = function () {
        return {
            a11y: {
                widget: {
                    title: "Accessibility Checker",
                    running: "Checking...",
                    issue: {
                        counter: "Issue {0} of {1}",
                        help: "WCAG 2.0 reference - opens in a new window",
                        none: "No accessibility issues detected"
                    },
                    previous: "Previous Issue",
                    next: "Next Issue",
                    repair: "Repair Issue",
                    available: "Repair available",
                    ignore: "Ignore"
                },
                image: {
                    alttext: {
                        empty: "Images must have an alternative text description",
                        filenameduplicate: "Alternative text must not be the same as the image filename",
                        set: "Provide alternative text:",
                        validation: {
                            empty: "Alternative text cannot be empty",
                            filenameduplicate: "Alternative text cannot be the same as the filename"
                        }
                    }
                },
                table: {
                    caption: {
                        empty: "Tables must have captions",
                        summaryduplicate: "Table caption and summary cannot have the same value",
                        set: "Provide caption:",
                        validation: {
                            empty: "Caption cannot be empty",
                            summaryduplicate: "Table caption cannot be the same as the table summary"
                        }
                    },
                    summary: {
                        empty: "Complex tables should have summaries",
                        set: "Provide table summary:",
                        validation: {
                            empty: "Summary cannot be empty",
                            captionduplicate: "Table summary cannot be the same as the table caption"
                        }
                    },
                    rowscells: {
                        none: "Table elements must contain TR and TD tags"
                    },
                    headers: {
                        none: "Tables must have at least one header cell",
                        set: "Choose table header:",
                        validation: {
                            none: "Please select either row or column header"
                        }
                    },
                    headerscope: {
                        none: "Table headers must be applied to a row or a column",
                        set: "Select header scope:",
                        scope: {
                            row: "Row",
                            col: "Column",
                            rowgroup: "Row Group",
                            colgroup: "Column group"
                        }
                    }
                },
                heading: {
                    nonsequential: "Headings must be applied in sequential order. For example: Heading 1 should be followed by Heading 2, not Heading 3.",
                    paragraphmisuse: "This paragraph looks like a heading. If it is a heading, please select a heading level.",
                    set: "Select a heading level:"
                },
                link: {
                    adjacent: "Adjacent links with the same URL should be merged into one link"
                },
                list: {
                    paragraphmisuse: "The selected text appears to be a list. Lists should be formatted using a list tag."
                },
                contrast: {
                    smalltext: "Text must have a contrast ratio of at least 4.5:1",
                    largetext: "Large text must have a contrast ratio of at least 3:1"
                },
                severity: {
                    error: "Error",
                    warning: "Warning",
                    info: "Informative"
                }
            },
            aria: {
                autocorrect: {
                    announce: "Auto correct {0}"
                },
                label: {
                    toolbar: "Rich Text Editor Toolbar",
                    editor: "Textbox.io Rich Text Editor - {0}",
                    fullscreen: "Textbox.io Fullscreen Rich Text Editor - {0}",
                    content: "Editable content",
                    more: "Click to expand or collapse"
                },
                help: {
                    mac: "Press \u2303\u2325H for help",
                    ctrl: "Press CTRL SHIFT H for help"
                },
                color: {
                    picker: "Color Picker",
                    menu: "Color Picker Menu"
                },
                font: {
                    color: "Text Colors",
                    highlight: "Highlight Colors",
                    palette: "Color palette"
                },
                context: {
                    menu: {
                        generic: "Context Menu"
                    }
                },
                stepper: {
                    input: {
                        invalid: "Size value is invalid"
                    }
                },
                table: {
                    headerdescription: "Press spacebar to activate setting. Press tab to return to table picker.",
                    cell: {
                        border: {
                            size: "Border Size"
                        }
                    }
                },
                input: {
                    invalid: "Invalid input"
                },
                widget: {
                    navigation: "Use the arrow keys to navigate."
                },
                image: {
                    crop: {
                        size: "Crop size is {0} pixels by {1} pixels"
                    }
                }
            },
            color: {
                white: "White",
                black: "Black",
                gray: "Gray",
                metal: "Metal",
                smoke: "Smoke",
                red: "Red",
                darkred: "Dark Red",
                darkorange: "Dark Orange",
                orange: "Orange",
                yellow: "Yellow",
                green: "Green",
                darkgreen: "Dark Green",
                mediumseagreen: "Medium Sea Green",
                lightgreen: "Light Green",
                lime: "Lime",
                mediumblue: "Medium Blue",
                navy: "Navy",
                blue: "Blue",
                lightblue: "Light Blue",
                violet: "Violet"
            },
            directionality: {
                rtldir: "Direction right-to-left",
                ltrdir: "Direction left-to-right"
            },
            parlance: {
                menu: "Language Menu",
                set: "Set Language",
                ar: "Arabic",
                ca: "Catalan",
                zh_cn: "Chinese (Simplified)",
                zh_tw: "Chinese (Traditional)",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch",
                en: "English",
                en_au: "English (Australia)",
                en_ca: "English (Canada)",
                en_gb: "English (United Kingdom)",
                en_us: "English (United States)",
                fa: "Farsi",
                fi: "Finnish",
                fr: "French",
                fr_ca: "French (Canada)",
                de: "German",
                el: "Greek",
                he: "Hebrew",
                hu: "Hungarian",
                it: "Italian",
                ja: "Japanese",
                kk: "Kazakh",
                ko: "Korean",
                no: "Norwegian",
                pl: "Polish",
                pt_br: "Portuguese (Brazil)",
                pt_pt: "Portuguese (Portugal)",
                ro: "Romanian",
                ru: "Russian",
                sk: "Slovak",
                sl: "Slovenian",
                es: "Spanish",
                es_419: "Spanish (Latin America)",
                es_es: "Spanish (Spain)",
                sv: "Swedish",
                tt: "Tatar",
                th: "Thai",
                tr: "Turkish",
                uk: "Ukrainian"
            },
            taptoedit: "Tap to edit",
            plaincode: {
                dialog: {
                    title: "Code View",
                    editor: "HTML Source Editor"
                }
            },
            help: {
                dialog: {
                    accessibility: "Keyboard Navigation",
                    a11ycheck: "Accessibility Checking",
                    about: "About Textbox.io",
                    markdown: "Markdown Formatting",
                    shortcuts: "Keyboard Shortcuts"
                }
            },
            spelling: {
                context: {
                    more: "More",
                    morelabel: "More Spelling Options Submenu"
                },
                none: "None",
                menu: "Spelling Language"
            },
            specialchar: {
                open: "Special Character",
                dialog: "Insert Special Character",
                latin: "Latin",
                insert: "Insert",
                punctuation: "Punctuation",
                currency: "Currencies",
                "extended-latin-a": "Extended Latin A",
                "extended-latin-b": "Extended Latin B",
                arrows: "Arrows",
                mathematical: "Mathematical",
                miscellaneous: "Miscellaneous",
                selects: "Selected Characters",
                grid: "Special Characters"
            },
            insert: {
                "menu-button": "Insert Menu",
                menu: "Insert",
                link: "Link",
                bookmark: "Bookmark",
                image: "Image",
                table: "Table",
                horizontalrule: "Horizontal Rule",
                media: "Media"
            },
            media: {
                embed: "Media embed code",
                insert: "Insert",
                placeholder: "Paste embed code here."
            },
            bookmark: {
                name: "Bookmark name",
                insert: "Insert",
                placeholder: "Enter Bookmark name"
            },
            wordcount: {
                open: "Word Count",
                dialog: "Word Count",
                counts: "Count",
                selection: "Selection",
                document: "Document",
                characters: "Characters",
                charactersnospaces: "Characters (no spaces)",
                words: "Words"
            },
            list: {
                unordered: {
                    menu: "Unordered List Options",
                    default: "Default Unordered",
                    circle: "Circle Unordered",
                    square: "Square Unordered",
                    disc: "Disc Unordered"
                },
                ordered: {
                    menu: "Ordered List Options",
                    default: "Default Ordered",
                    decimal: "Decimal Ordered",
                    "upper-alpha": "Upper Alpha Ordered",
                    "lower-alpha": "Lower Alpha Ordered",
                    "upper-roman": "Upper Roman Ordered",
                    "lower-roman": "Lower Roman Ordered",
                    "lower-greek": "Lower Greek Ordered"
                }
            },
            tag: {
                inline: {
                    class: "span ({0})"
                },
                img: "image"
            },
            block: {
                normal: "Normal",
                p: "Paragraph",
                h1: "Heading 1",
                h2: "Heading 2",
                h3: "Heading 3",
                h4: "Heading 4",
                h5: "Heading 5",
                h6: "Heading 6",
                div: "Div",
                pre: "Pre",
                li: "List Item",
                td: "Cell",
                th: "Header Cell",
                styles: "Styles Menu",
                dropdown: "Blocks",
                describe: "Current style {0}",
                menu: "Styles",
                label: {
                    inline: "Inline Styles",
                    table: "Table Styles",
                    line: "Line Styles",
                    media: "Media Styles",
                    list: "List Styles",
                    link: "Link Styles"
                }
            },
            font: {
                "menu-button": "Font Menu",
                menu: "Font",
                face: "Typeface",
                size: "Font Size",
                coloroption: "Color",
                describe: "Current font {0}",
                color: "Text",
                colorcustom: "Custom...",
                highlight: "Highlight",
                stepper: {
                    input: "Set Font Size",
                    increase: "Increase Font Size",
                    decrease: "Decrease Font Size"
                }
            },
            colorcustom: {
                button: "Custom",
                rgb: {
                    red: {
                        label: "R",
                        description: "Red component"
                    },
                    green: {
                        label: "G",
                        description: "Green component"
                    },
                    blue: {
                        label: "B",
                        description: "Blue component"
                    },
                    hex: {
                        label: "#",
                        description: "Hex color code"
                    },
                    range: "Range 0 to 255"
                },
                sb: {
                    saturation: "Saturation",
                    brightness: "Brightness",
                    picker: "Saturation and Brightness Picker",
                    palette: "Saturation and Brightness Palette",
                    instructions: "Use arrow keys to select saturation and brightness, on x and y axes"
                },
                hue: {
                    hue: "Hue",
                    slider: "Hue Slider",
                    palette: "Hue Palette",
                    instructions: "Use arrow keys to select a hue"
                }
            },
            cog: {
                "menu-button": "Settings Menu",
                menu: "Settings",
                spellcheck: "Spell Check",
                capitalisation: "Capitalization",
                autocorrect: "Autocorrect",
                linkpreviews: "Link Previews",
                help: "Help"
            },
            alignment: {
                toolbar: "Alignment Menu",
                menu: "Alignment",
                left: "Align Left",
                center: "Align Center",
                right: "Align Right",
                justify: "Align Justify",
                describe: "Current alignment {0}"
            },
            category: {
                language: "Language group",
                undo: "Undo and Redo group",
                insert: "Insert group",
                style: "Styles group",
                emphasis: "Formatting group",
                align: "Alignment group",
                listindent: "List and Indent group",
                format: "Font group",
                tools: "Tools group",
                table: "Table group",
                image: "Image Editing group"
            },
            action: {
                undo: "Undo",
                redo: "Redo",
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strikethrough: "Strikethrough",
                subscript: "Subscript",
                superscript: "Superscript",
                removeformat: "Remove Formatting",
                bullist: "Unordered List",
                numlist: "Ordered List",
                indent: "Indent More",
                outdent: "Indent Less",
                blockquote: "Blockquote",
                fullscreen: "Full Screen",
                search: "Find and Replace Dialog",
                a11ycheck: "Check Accessibility",
                toggle: {
                    fullscreen: "Exit Full Screen"
                }
            },
            table: {
                menu: "Insert Table",
                "column-header": "Header Column",
                "row-header": "Header Row",
                float: "Floating Alignment",
                cell: {
                    alignment: {
                        top: "Align Top",
                        middle: "Align Middle",
                        bottom: "Align Bottom",
                        toolbar: "Cell Vertical Alignment"
                    },
                    color: {
                        border: "Border Color",
                        background: "Background Color"
                    },
                    border: {
                        width: "Border Width",
                        stepper: {
                            input: "Set Border Width",
                            increase: "Increase Border Width",
                            decrease: "Decrease Border Width"
                        }
                    }
                },
                context: {
                    row: {
                        title: "Row Submenu",
                        menu: "Row",
                        insertabove: "Insert Above",
                        insertbelow: "Insert Below"
                    },
                    column: {
                        title: "Column Submenu",
                        menu: "Column",
                        insertleft: "Insert Left",
                        insertright: "Insert Right"
                    },
                    cell: {
                        merge: "Merge Cells",
                        unmerge: "Split Cell",
                        "split-cols": "Split into Columns",
                        "split-rows": "Split into Rows"
                    },
                    table: {
                        title: "Table Submenu",
                        menu: "Table",
                        properties: "Properties",
                        delete: "Delete"
                    },
                    common: {
                        delete: "Delete",
                        normal: "Set as Normal",
                        header: "Set as Header"
                    },
                    palette: {
                        show: "Table editing options available in toolbar",
                        hide: "Table editing options no longer available"
                    }
                },
                picker: {
                    header: "Header set",
                    label: "Table picker",
                    describepicker: "Use arrow keys to set table size.  Press tab to go to table header settings. Press the space or enter key to insert table.",
                    rows: "{0} high",
                    cols: "{0} wide"
                },
                border: "Border",
                summary: "Summary",
                dialog: "Table Properties",
                caption: "Table Caption",
                width: "Width",
                height: "Height"
            },
            align: {
                none: "Align None",
                center: "Align Center",
                left: "Align Left",
                right: "Align Right"
            },
            button: {
                ok: "OK",
                cancel: "Cancel",
                close: "Cancel Dialog"
            },
            banner: {
                close: "Close Banner"
            },
            border: {
                on: "On",
                off: "Off",
                labels: {
                    on: "Border on",
                    off: "Border off"
                }
            },
            loading: {
                wait: "Please wait"
            },
            toolbar: {
                more: "More",
                backbutton: "Back",
                "switch-code": "Switch to Code view",
                "switch-pencil": "Switch to Design view"
            },
            link: {
                context: {
                    edit: "Edit Link",
                    follow: "Open Link",
                    ignore: "Ignore Broken Link",
                    remove: "Remove Link"
                },
                dialog: {
                    aria: {
                        update: "Update link",
                        insert: "Insert link",
                        properties: "Link properties",
                        quick: "Quick options"
                    },
                    autocomplete: {
                        open: "Link autocomplete list available. Continue typing or use up and down keys to select suggestions.",
                        close: "Link autocomplete list closed",
                        accept: "Selected link suggestion {0}"
                    },
                    edit: "Edit",
                    remove: "Remove",
                    preview: "Preview",
                    update: "Update",
                    insert: "Insert",
                    tooltip: "Link"
                },
                properties: {
                    dialog: {
                        title: "Link Properties"
                    },
                    text: {
                        label: "Text to display",
                        placeholder: "Type or paste display text"
                    },
                    url: {
                        label: "Link URL or Bookmark",
                        placeholder: "Enter Link URL or Bookmark",
                        invalid: "Your Link URL may be incorrect"
                    },
                    title: {
                        label: "Title",
                        placeholder: "Type or paste link title"
                    },
                    button: {
                        remove: "Remove"
                    },
                    target: {
                        label: "Target",
                        none: "None",
                        blank: "New Window",
                        top: "Whole Page",
                        self: "Same Frame",
                        parent: "Parent Frame"
                    }
                },
                anchor: {
                    top: "Top of Document",
                    bottom: "Bottom of Document"
                }
            },
            fileupload: {
                title: "Insert Images",
                tablocal: "Local Files",
                tabweburl: "Web URL",
                dropimages: "Drop Images Here",
                chooseimage: "Choose Image to Upload",
                web: {
                    url: "Web Image URL:"
                },
                weburlhelp: "Type your URL to see an image preview. Large images may take a while to appear.",
                invalid1: "We can't find an image at the URL you're using.",
                invalid2: "Check your URL for typing errors.",
                invalid3: "Make sure the image that you are accessing is public and not password protected or on a private network."
            },
            image: {
                context: {
                    properties: "Image Properties",
                    palette: {
                        show: "Image editing options available in toolbar",
                        hide: "Image editing options no longer available"
                    }
                },
                dialog: {
                    title: "Image Properties",
                    fields: {
                        align: "Floating Alignment",
                        url: "URL",
                        urllocal: "Image not yet saved",
                        alt: "Alternative Text",
                        width: "Width",
                        height: "Height",
                        constrain: {
                            label: "Constrain Proportions",
                            on: "Locked proportions",
                            off: "Unlocked proportions"
                        }
                    }
                },
                menu: "Insert Image",
                "menu-button": "Insert Image Menu",
                "from-url": "Web URL",
                "from-camera": "Camera Roll",
                toolbar: {
                    rotateleft: "Rotate Left",
                    rotateright: "Rotate Right",
                    fliphorizontal: "Flip Horizontal",
                    flipvertical: "Flip Vertical",
                    properties: "Image Properties"
                },
                crop: {
                    announce: "Entering Crop interface. Press enter to apply, escape to cancel.",
                    cancel: "Cancelling Crop operation",
                    begin: "Crop Image",
                    apply: "Apply Crop",
                    handle: {
                        nw: "Top Left Crop Handle",
                        ne: "Top Right Crop Handle",
                        se: "Bottom Right Crop Handle",
                        sw: "Bottom Left Crop Handle",
                        shade: "Crop Mask"
                    }
                }
            },
            units: {
                "amount-of-total": "{0} of {1}"
            },
            search: {
                menu: "Find and Replace",
                field: {
                    replace: "Replace Field",
                    search: "Search Field"
                },
                search: "Search",
                previous: "Previous",
                next: "Next",
                replace: "Replace",
                "replace-all": "Replace All",
                matchcase: "Match Case"
            },
            mentions: {
                initiated: "Created mention, continue typing for type ahead",
                lookahead: {
                    open: "Type ahead list box",
                    cancelled: "Canceled mention",
                    searching: "Searching for results",
                    selected: "Inserted mention of {0}",
                    noresults: "No results"
                }
            },
            cement: {
                dialog: {
                    paste: {
                        title: "Paste Formatting Options",
                        instructions: "Choose to keep or remove formatting in the pasted content.",
                        merge: "Keep Formatting",
                        clean: "Remove Formatting"
                    },
                    flash: {
                        title: "Local Image Import",
                        "trigger-paste": "Trigger paste again from the keyboard to paste content with images.",
                        missing: 'Adobe Flash is required to import images from Microsoft Office. Install the <a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash Player</a>.',
                        "press-escape": 'Press <span class="ephox-polish-help-kbd">ESC</span> to ignore local images and continue editing.'
                    }
                }
            },
            cloud: {
                error: {
                    apikey: "Your API key is invalid.",
                    domain: "Your domain ({0}) is not supported by your API key.",
                    plan: "You have exceeded the number of editor downloads available on your plan. Visit the website to upgrade."
                },
                dashboard: "Go to the Administrator Dashboard"
            },
            errors: {
                paste: {
                    notready: "Word Import functionality has not loaded. Please wait and try again.",
                    generic: "An error occurred while pasting content."
                },
                toolbar: {
                    missing: {
                        custom: {
                            string: 'Custom commands must have the property "{0}" and it must be a string'
                        }
                    },
                    invalid: "The configuration for the toolbar is invalid ({0}). See console for details."
                },
                spelling: {
                    missing: {
                        service: "The spelling service was not found: ({0})."
                    }
                },
                images: {
                    edit: {
                        needsproxy: "A proxy is required to edit images from this domain: ({0})",
                        proxyerror: "Unable to commmunicate with the proxy to edit this image. See console for details.",
                        generic: "An error occurred while performing the image edit operation. See console for details."
                    },
                    disallowed: {
                        local: "Local image paste has been disabled. Local images have been removed from pasted content.",
                        dragdrop: "Drag and drop has been disabled."
                    },
                    upload: {
                        unknown: "Image failed to upload",
                        invalid: "Not all files were processed - some were not valid images",
                        failed: "Image failed to upload: ({0}).",
                        cors: "Unable to contact image upload service. Possible CORS error: ({0})"
                    },
                    missing: {
                        service: "The images service was not found: ({0}).",
                        flash: "Your browser security settings may be preventing images from being imported."
                    },
                    import: {
                        failed: "Some images failed to import.",
                        unsupported: "Unsupported image type.",
                        invalid: "Image is invalid."
                    }
                },
                webview: {
                    image: "Directly copied images cannot be pasted."
                },
                safari: {
                    image: "Safari does not support direct paste of images.",
                    url: "Suggested workarounds",
                    rtf: "Learn how",
                    "browser-settings": "To paste images, please adjust your browser settings."
                },
                flash: {
                    crashed: "Images have not been imported as Adobe Flash appears to have crashed. This may be caused by pasting large documents."
                },
                http: {
                    400: "Bad Request: {0}",
                    401: "Unauthorized: {0}",
                    403: "Forbidden: {0}",
                    404: "Not Found: {0}",
                    407: "Proxy Authentication Required: {0}",
                    409: "File Conflict: {0}",
                    413: "Payload Too Large: {0}",
                    415: "Unsupported Media Type: {0}",
                    500: "Internal Server Error: {0}",
                    501: "Not Implemented: {0}"
                }
            }
        }
    },
        b = function (a, b) {
            var c = a.src.indexOf("?");
            return a.src.indexOf(b) + b.length === c
        },
        c = function (a) {
            for (var b = a.split("."), c = window, d = 0; d < b.length && void 0 !== c && null !== c; ++d) c = c[b[d]];
            return c
        },
        d = function (a, b) {
            if (a) {
                var d = a.getAttribute("data-main");
                if (d) {
                    a.removeAttribute("data-main");
                    var e = c(d);
                    if ("function" == typeof e) return e;
                    console.warn("attribute on " + b + " does not reference a global method")
                } else console.warn("no data-main attribute found on " + b + " script tag")
            }
        };
    ! function (a, c) {
        var e = d(document.currentScript, c);
        if (e) return e;
        for (var f = document.getElementsByTagName("script"), g = 0; g < f.length; g++)
            if (b(f[g], a)) {
                var h = d(f[g], c);
                if (h) return h
            } throw "cannot locate " + c + " script tag"
    }("tbio_en.js", "strings for language en")({
        version: "2.4.2",
        strings: a
    })
}();