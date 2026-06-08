const nextConfig = require("eslint-config-next")

module.exports = [
  ...nextConfig,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
]
