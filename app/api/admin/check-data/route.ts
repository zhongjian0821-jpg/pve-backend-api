// app/api/admin/check-data/route.ts
import { sql } from '@neondatabase/serverless'

export async function GET() {
  try {
    // 检查所有表的数据量
    const tables = [
      'wallets',
      'nodes', 
      'orders',
      'withdrawals',
      'commissions',
      'staking_records',
      'invitations'
    ]
    
    const stats: any = {}
    
    for (const table of tables) {
      try {
        const result = await sql`
          SELECT COUNT(*) as count FROM ${sql(table)}
        `
        stats[table] = parseInt(result[0].count)
      } catch (error) {
        stats[table] = 'error'
      }
    }
    
    // 检查数据库信息
    const dbInfo = await sql`SELECT current_database(), current_user, version()`
    
    return Response.json({
      success: true,
      timestamp: new Date().toISOString(),
      database: dbInfo[0].current_database,
      user: dbInfo[0].current_user,
      tables: stats,
      totalRecords: Object.values(stats).reduce((a: any, b: any) => 
        typeof b === 'number' ? a + b : a, 0
      )
    })
    
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}
