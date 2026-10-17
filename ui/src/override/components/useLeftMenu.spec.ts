import {describe, expect, it, vi} from "vitest"

vi.mock("vue-router", () => ({
    useRoute: () => ({name: "home", query: {}}),
    useRouter: () => ({
        getRoutes: () => [],
        resolve: () => ({fullPath: "/"}),
    }),
}))

vi.mock("vue-i18n", () => ({
    useI18n: () => ({t: (key: string) => `translated:${key}`}),
}))

import {useLeftMenu} from "./useLeftMenu"

describe("useLeftMenu", () => {
    it("shouldTranslateSectionTitles", () => {
        const {menu} = useLeftMenu()

        const workspace = menu.value.find((section) => section.id === "workspace")
        const resources = menu.value.find((section) => section.id === "resources")

        expect(workspace?.title).toBe("translated:workspace")
        expect(resources?.title).toBe("translated:resources")
    })
})
