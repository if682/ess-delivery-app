import { defineConfig } from 'vitest/config'


export default defineConfig({
    test: {
        environmentMatchGlobs: [
            ["source/http/controllers/**", "prisma"]
        ]
    }
}) 