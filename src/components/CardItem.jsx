import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Usuarios Activos</Text>
        <BadgeDelta deltaType="moderateIncrease">+20%</BadgeDelta>
      </Flex>
      <Metric>200</Metric>
    </Card>
  );
};

export default CardItem;
