#!/bin/bash

# Перевірка наявності необхідної команди cwebp
if ! command -v cwebp &> /dev/null
then
    echo "cwebp could not be found, please install it first."
    exit
fi

# Функція для конвертації PNG в WebP та видалення оригінальних PNG файлів
convert_images() {
    local dir="$1"
    find "$dir" -type f -name "*.png" | while read -r img; do
        # Визначення імені нового файлу
        output="${img%.png}.webp"
        # Конвертація зображення
        cwebp "$img" -o "$output"
        # Перевірка, чи була конвертація успішною
        if [ $? -eq 0 ]; then
            # Видалення оригінального файлу
            rm "$img"
            echo "Converted and removed: $img"
        else
            echo "Failed to convert: $img"
        fi
    done
}

# Виклик функції з вказаною директорією
convert_images "$1"
