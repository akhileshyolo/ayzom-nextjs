module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            "/": { page: "/" },
            "/work": { page: "/work" },
            "/blog": { page: "/blog" },
            "/404": { page: "/404" }
        }
    },
    trailingSlash: true,
}