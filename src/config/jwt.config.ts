import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
    accessTokenKey: process.env.JWT_ACCESS_SECRET,
    accessExpiry: process.env.JWT_EXPIRATION_TIME || '30d', // Default to 30 days if not set
}));
