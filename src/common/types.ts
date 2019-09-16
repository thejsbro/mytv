export interface IMovieImages {
    artwork: string;
    snapshot: string;
}

export interface IMovie {
    title: string;
    year: string;
    duration: string;
    label: string;
    id: string;
    images: IMovieImages;
}

export interface IMovieDetails extends IMovie {
    original_title: string;
    short_plot: string;
    plot: string;
    actors: IPerson[];
    directors: IPerson[];
    genres: IGenre[];
    rating: {
        average: number,
        scale: number,
    }
}

export interface IPerson {
    id: string;
    name: string;
    photo: string;
    born_at: string;
}

export interface IGenre {
    id: string;
    name: string;
    adult: boolean;
    erotic: boolean;
}

export interface ITrailer {
    id: string;
    url: string;
}
