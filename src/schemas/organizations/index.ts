import { Type } from "@sinclair/typebox";

export const Organization = Type.Object({
  name: Type.String(),
  email: Type.Optional(Type.String({ format: "email" })),
});

export const schema = {
  organizations: {
    schema: {
      body: Organization,
      response: {
        200: Organization
      },
    },
  },
};
