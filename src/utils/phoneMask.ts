import React from "react";

export const phoneMask = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    return value.replace(/\d/g, '').replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
}