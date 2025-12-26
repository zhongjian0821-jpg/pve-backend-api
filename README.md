# PVE Operations Center - Backend API

## 🚀 快速开始

这是 PVE 运营中心的后端 API 项目，包含所有管理员接口。

### 环境变量配置

需要在 Vercel 中配置以下环境变量：

```
DATABASE_URL=postgresql://neondb_owner:npg_uqVF2XMa4wCY@ep-crimson-bar-ah90q08x-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require
JWT_SECRET=pve-jwt-secret-2025
ADMIN_JWT_SECRET=pve-admin-secret-2025
USER_JWT_SECRET=pve-user-secret-2025
ASHVA_CONTRACT=0xea75cb12bbe6232eb082b365f450d3fe06d02fb3
ALLOWED_ORIGINS=https://v0-web3-membership-center.vercel.app,https://v0-pve-operations-center.vercel.app
```

### 部署到 Vercel

1. 访问 [Vercel Dashboard](https://vercel.com)
2. 点击 "Import Project"
3. 导入这个 GitHub 仓库
4. 配置环境变量
5. 点击 "Deploy"

### API 端点

#### 管理员认证
- `POST /api/admin/auth/login` - 管理员登录
- `GET /api/admin/auth/me` - 获取当前管理员信息

#### 钱包管理
- `GET /api/admin/wallets` - 获取钱包列表
- `GET /api/admin/wallets/[address]` - 获取钱包详情
- `PUT /api/admin/wallets/[address]` - 更新钱包信息
- `POST /api/admin/wallets/[address]/ban` - 封禁/解封钱包

#### 节点管理
- `GET /api/admin/nodes` - 获取节点列表
- `GET /api/admin/nodes/[id]` - 获取节点详情
- `PUT /api/admin/nodes/[id]` - 更新节点信息
- `DELETE /api/admin/nodes/[id]` - 删除节点
- `GET /api/admin/nodes/stats` - 获取节点统计

#### 提现管理
- `GET /api/admin/withdrawals` - 获取提现记录
- `POST /api/admin/withdrawals/[id]/approve` - 批准提现
- `POST /api/admin/withdrawals/[id]/reject` - 拒绝提现

#### 订单管理
- `GET /api/admin/orders` - 获取订单列表

### 默认管理员账号

- 用户名: `admin`
- 密码: `Admin123!`

⚠️ **请在首次登录后立即修改密码！**

## 📚 技术栈

- Next.js 14
- TypeScript
- Neon Database (PostgreSQL)
- JWT Authentication
- ethers.js
- bcryptjs

## 📄 License

MIT
