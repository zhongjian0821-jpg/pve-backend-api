# PVE Backend API

Backend API server for PVE Operations Center.

## Features

- ✅ JWT Authentication
- ✅ Admin Management APIs
- ✅ Wallet Management
- ✅ Node Management  
- ✅ Withdrawal Management
- ✅ Order Management

## API Endpoints

### Authentication
- POST `/api/admin/auth/login` - Admin login
- GET `/api/admin/auth/me` - Get current user

### Wallet Management
- GET `/api/admin/wallets/list` - List all wallets
- GET `/api/admin/wallets/{address}/details` - Get wallet details
- POST `/api/admin/wallets/{address}/ban` - Ban/unban wallet

### Node Management
- GET `/api/admin/nodes/list` - List all nodes
- GET `/api/admin/nodes/{id}/details` - Get node details
- PATCH `/api/admin/nodes/{id}/stats` - Update node stats

### Withdrawal Management
- GET `/api/admin/withdrawals/list` - List withdrawals
- POST `/api/admin/withdrawals/{id}/approve` - Approve withdrawal
- POST `/api/admin/withdrawals/{id}/reject` - Reject withdrawal

### Order Management
- GET `/api/admin/orders/list` - List all orders

### Utilities
- GET `/api/admin/check-data` - Check database data

## Environment Variables

Required:
- `DATABASE_URL` - Neon PostgreSQL connection string
- `JWT_SECRET` - JWT secret key
- `ADMIN_JWT_SECRET` - Admin JWT secret
- `USER_JWT_SECRET` - User JWT secret
- `ASHVA_CONTRACT` - Contract address

## Deployment

Deployed on Vercel: https://pve-backend-api.vercel.app
