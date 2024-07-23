export interface SagaBallZCharacter {
    id: string;
    name: string;
    genre: string;
    race: string;
    image: string;
    planet: string;
    description: string;
    biography: string;
    transformations: Transformation[];
}

export interface Transformation {
    id?: string | number;
    image?: string;
    title?: string;
    description?: string;
    Sin?: string;
    trans?: number;
}

