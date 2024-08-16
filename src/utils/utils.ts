// convert string to title case
export function toTitleCase(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getCategoryfromSlug(slug: string) {
	const category = slug.split("-")[0];
	return category.endsWith("s") ? category.slice(0, -1) : category;
}
