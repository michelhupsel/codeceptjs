# 🏢 Parabank Test Automation

## CodeceptJS + Playwright Architecture

------------------------------------------------------------------------

# Executive Summary

This project implements a End-to-End (E2E) test automation framework using:

-   CodeceptJS 3.7.6
-   Playwright
-   Faker (Data Factory Pattern)
-   Page Object Model (POM)
-   Controlled JSON data persistence
-   Tag-based execution strategy
-   Headless execution support
-   HTML reporting

Target Application: https://parabank.parasoft.com/parabank

------------------------------------------------------------------------

# Architecture Overview

## Architectural Principles

-   Separation of Concerns
-   Single Responsibility Principle
-   Deterministic Test Execution
-   Data Isolation
-   Reusability
-   Enterprise Scalability

------------------------------------------------------------------------

# Project Structure

    .
    ├── tests/
    │   ├── checkout_test.js
    │   ├── login_test.js
    │   └── register_test.js
    │
    ├── pages/
    │   ├── checkout.js
    │   └── register_page.js
    │
    ├── utils/
    │   ├── userFactory.js
    │   └── userData.js
    │
    ├── output/
    │
    ├── codecept.conf.js
    ├── package.json
    ├── steps_file.js
    └── steps.d.ts

------------------------------------------------------------------------

# Layer Responsibilities

## Test Layer

-   Business flow orchestration
-   Tag application
-   Scenario definition
-   Coordination between layers

## Page Object Layer

-   Centralized locators
-   UI interaction abstraction
-   Reduced maintenance impact

## Data Layer

### Data Factory (Faker)

-   Dynamic test data generation
-   Avoids hardcoded values
-   Ensures uniqueness

### Persistence Strategy

-   Stores only the last created user
-   Overwrites at each execution
-   JSON file stored in /output/user.json

------------------------------------------------------------------------

# Installation

``` bash
npm install
npx playwright install
```

------------------------------------------------------------------------

# Execution Commands

## Full Execution

``` bash
npm run codeceptjs
```

## Headless Execution

``` bash
npm run codeceptjs:headless
```

## Run Specific Test by Tag

``` bash
npx codeceptjs run --grep register
npx codeceptjs run --grep login
```

------------------------------------------------------------------------

# Reporting

HTML Reporter enabled.

Generated at:

    /output/report.html

------------------------------------------------------------------------

# CI/CD Readiness

Framework prepared for:

-   GitHub Actions
-   GitLab CI
-   Azure DevOps
-   Jenkins
-   Docker environments

------------------------------------------------------------------------

# Security Considerations

-   No hardcoded credentials
-   No sensitive data persisted
-   Dynamic data generation
-   Controlled JSON persistence

------------------------------------------------------------------------

# Technology Stack

  Layer             Technology
  ----------------- ------------------
  Framework         CodeceptJS 3.7.6
  Engine            Playwright
  Data Generation   @faker-js/faker
  Runtime           Node.js v25.6.1
  Reporting         HTML Reporter
  Language          JavaScript

------------------------------------------------------------------------

# Roadmap

-   Parallel execution
-   Allure integration
-   Dockerization
-   Multi-environment support
-   Retry strategy
-   Observability integration

------------------------------------------------------------------------

# Conclusion

This framework provides a scalable, maintainable, and enterprise-ready
automation foundation aligned with modern QA engineering standards.
