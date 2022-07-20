load("@aspect_rules_js//npm:defs.bzl", "npm_package")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")

_DEPS = [
    "//examples:node_modules/@types/node",
    "//examples:node_modules/date-fns",
]

ts_project(
    name = "ts",
    srcs = ["index.ts"],
    declaration = True,
    # Note, the tsconfig attribute defaults to the tsconfig.json file in this directory.
    # tsconfig = "<default>",
    deps = _DEPS,
    supports_workers = False
)

npm_package(
    name = "ts_lib",
    srcs = ["ts"],
    package = "@myorg/ts_lib",
    visibility = ["//examples:__subpackages__"],
)
