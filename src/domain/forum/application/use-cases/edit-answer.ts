import { type Either, left, right } from "@/core/either";
import { NotAllowedError } from "@/domain/forum/application/use-cases/errors/not-allowed-error";
import { ResourceNotFoundError } from "@/domain/forum/application/use-cases/errors/resource-not-found-error";
import type { Answer } from "@/domain/forum/enterprise/entities/answer";
import type { AnswersRepository } from "../repositories/answers-repository";

interface EditAnswerUseCaseRequest {
	authorId: string;
	answerId: string;
	content: string;
}

type EditAnswerUseCaseResponse = Either<
	ResourceNotFoundError | NotAllowedError,
	{
		answer: Answer;
	}
>;

export class EditAnswerUseCase {
	constructor(private answersRepository: AnswersRepository) {}

	async execute({
		authorId,
		answerId,
		content,
	}: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse> {
		const answer = await this.answersRepository.findById(answerId);

		if (!answer) {
			return left(new ResourceNotFoundError());
		}

		if (authorId !== answer.authorId.toString()) {
			return left(new NotAllowedError());
		}

		answer.content = content;

		await this.answersRepository.save(answer);

		return right({
			answer,
		});
	}
}
