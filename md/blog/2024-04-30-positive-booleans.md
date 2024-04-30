---
title: Positive Booleans
date: 2024-04-30
description: Naming booleans positively can make your code more readable.
---
# Positive Booleans

One of the most difficult thing in programming (if not the most difficult) is naming variables.
A good name facilitates:
 
 - Readibility
 - Understandability
 - Consistency
 - Being concise

As this topic could worth a whole book, I will focus on a small aspect of it: naming booleans.

## Making a question

The value of a boolean can be `true` or `false`. (duh...)

Formulating the variable name as a question can help identifying that it is a boolean, and what value it represents.

Let's take an example, where we want to store a user's info, and we want to represent what role the user has.
The user can be either an admin or a regular user. Since it can be only two values, it could easily be a boolean (if we don't want to have more roles).

```typescript
interface User {
    name: string;
    email: string;
    role: boolean;
}

// after login
if (user.role) {
    // do admin stuff
} else {
    // do regular user stuff
}

```

This would work for some extent, but it is not clear what `role` represents. The developer might know or even document in a
comment that if the `role` is `true` then the user is an admin, but it is not clear and not very readable.

### Use a question

The best way to name boolean variables to formulate a question that can be answered with `yes` or `no`.

This means that the variable should start with a verb, most commonly `is`, `has`, `can`, `should`, etc.

```typescript
interface User {
    name: string;
    email: string;
    isAdmin: boolean;
}

// after login
if (user.isAdmin) {
    // do admin stuff
} else {
    // do regular user stuff
}
```

This way, it is clear what the variable represents, and it is more readable.

## Positive naming

Let's say that our customer service team wants us to add a message to the page, if the user did not verify their email.
How could we name the variable?

```typescript
interface User {
    name: string;
    email: string;
    isEmailNotVerified: boolean;
}
```

This complies with the naming convention, but the issue is the negative in the name.
If the value is `true`, then the email is **not** verified, if it is `false`, then the email **is** verified.

This would make the check more confusing, if it using double negatives.

```typescript
if ( !user.isEmailNotVerified ) {
    // Is the email verified here?
}
```

### Positive naming

Even though the request was to filter out the users who did not verify their email, we can still name the variable positively.

```typescript
interface User {
    name: string;
    email: string;
    isEmailVerified: boolean;
}
```

In this case we would filter those cases, where the field is `false`.

```typescript
if ( !user.isEmailVerified ) {
    // do something
}
```

This also applies when there is no explicit `not` in the name, but the name suggest a negative concept.

```typescript
// Do not write:
const isUnavailable = true;
// Should be:
const isAvailable = false;

// Or even better:
const isOutOfService = true;
// Should be:
const isInService = false;
```

## The exception

Although is some cases, it could be more readable to use the negative form, for example is the business logic incorporate the negative form,
Or that the positive form would be misleading.

```typescript
// Do not write:
const isBuildingDemolished = false;
// Could be
const isBuildingStanding = true;
// Even though the building could be under construction, could be damaged, etc.
```

## Conclusion

Naming variables is hard, but naming booleans can be easier if you follow the convention of formulating a question that can be answered with `yes` or `no`.
Also, try to name the variables positively, to avoid double negatives and make the code more readable.
