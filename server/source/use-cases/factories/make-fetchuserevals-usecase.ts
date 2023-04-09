import { PrismaMoviesRepository } from "../../repositories/prisma/PrismaMoviesRepository";
import { FetchUserEvaluationsUseCase } from "../fetch-user-evaluations"; 

export function makeFetchUserEvaluationsUseCase() {
    const moviesRepository = new PrismaMoviesRepository();
    const fetchUserEvaluationsUseCase = new FetchUserEvaluationsUseCase(moviesRepository);

    return fetchUserEvaluationsUseCase;
}