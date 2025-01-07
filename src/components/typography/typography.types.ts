// Minimalist is fully implemented, Brutalist and Space and any other typography is not, and you do it by defining the styles for it the exact same way we have defined it for the Minimalist, first you create a Type like down here below, you match the strings with the strings of the className, so if you name it caption in the scss, you name this type the same string and thats about it, while using it if you give it a theme value, only the valid options show up, so for example.: If you provide "Space" as theme and display-large as variant, you will get an error cuz it doesn't exist on Space. Thats it.

export type MinimalistVariants =
  | "display-large"
  | "display-medium"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "body-large"
  | "body-large-bold"
  | "body-medium"
  | "body-small"
  | "button-large"
  | "button-small"
  | "caption"
  | "overline"

export type BrutalistVariants =
  | "display-large"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "body-large-bold"
  | "caption";

export type SpaceVariants =
  | "display-medium"
  | "heading-2"
  | "body-medium"
  | "button-small"
  | "overline";

export interface ThemeVariantMap {
  Minimalist: MinimalistVariants;
  Brutalist: BrutalistVariants;
  Space: SpaceVariants;
}

// This defines a type that maps a theme to its specific variant types
export type ThemeVariant<T extends keyof ThemeVariantMap> = ThemeVariantMap[T];
