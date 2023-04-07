export function isDuplicateCategory(categoryName, categories) {
    return categories.some(category => categoryName === category.name)
}