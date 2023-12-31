export default {
    build: {
      postcss: {
        // Add plugin names as key and arguments as value
        // Install them before as dependencies with npm or yarn
        plugins: {
          // Disable a plugin by passing false as value
          'postcss-nested': {},
        },
        preset: {
          // Change the postcss-preset-env settings
          autoprefixer: {
            grid: true
          }
        }
      }
    }
  }