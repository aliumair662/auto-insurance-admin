import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, Button } from '@material-ui/core';

const DefaultPricingCard = ({
    title,
    subtitle,
    price,
    description,
    buttonText,
    onClick,
}) => (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
        </CardHeader>
        <CardBody>
            <CardText>{description}</CardText>
            <Button variant="outlined" color="primary" onClick={onClick}>{buttonText}</Button>
        </CardBody>
    </Card>
);
export default DefaultPricingCard;