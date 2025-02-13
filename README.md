# MBA Rocketseat Web Development - Project Clean Domain

This project is a demonstration of Domain Driven Design (DDD) principles applied in a Node.js application. The goal is to showcase how to structure and organize code to reflect the business domain accurately.

## Domain Driven Design (DDD)

Domain Driven Design is an approach to software development that emphasizes collaboration between technical and domain experts to create a shared understanding of the problem space. The main concepts of DDD include:

- **Entities**: Objects that have a distinct identity and lifecycle.
- **Value Objects**: Immutable objects that are defined by their attributes.
- **Aggregates**: Clusters of entities and value objects that are treated as a single unit.
- **Repositories**: Interfaces for accessing aggregates from a data store.
- **Services**: Operations that don't naturally fit within entities or value objects.
- **Factories**: Methods for creating complex objects and aggregates.
- **Domain Events**: Events that signify something important has happened in the domain.

## Project Structure

The project is organized into several layers to separate concerns and improve maintainability:

- **Domain**: Contains the core business logic, including entities, value objects, aggregates, and domain events.
  - [entities](src/domain/entities/): Contains the entity classes such as [`student`](src/domain/entities/student.ts), [`instructor`](src/domain/entities/instructor.ts), and [`question`](src/domain/entities/question.ts).
  - [use-cases](src/domain/use-cases/): Contains the use case implementations such as [`question`](src/domain/use-cases/question.ts).
- **Application**: Contains application services, which orchestrate the use of domain objects to fulfill use cases.
- **Infrastructure**: Contains implementations of repositories, factories, and other technical concerns.
- **Interfaces**: Contains the user interface and API endpoints.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mba-rocketseat-clean-domain.git