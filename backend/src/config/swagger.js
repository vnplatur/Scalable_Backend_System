import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../docs/swagger.json" with { type: "json" };

const swaggerSetup = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default swaggerSetup;
