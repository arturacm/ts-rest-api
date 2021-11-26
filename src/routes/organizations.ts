import { FastifyPluginAsync } from "fastify";

import { schema } from "../schemas/organizations/organizations";
import type { OrganizationType } from "../schemas/types";

const organizations: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.post<{ Body: OrganizationType; Reply: OrganizationType }>(
    "/organizations",
    schema.organizations,
    (req, res) => {
      const { body: organization } = req;
      fastify.log.error("entrada toda");
      fastify.log.error(JSON.stringify(organization));
      fastify.log.error(organization.name);
      res.status(200).send(organization);
    }
  );
};

export default organizations;
