// app/api/check-old-db/route.ts
export async function GET() {
  try {
    const dbInfo = {
      // 这些是旧的环境变量（如果还存在）
      POSTGRES_HOST: process.env.POSTGRES_HOST || 'not found',
      POSTGRES_DATABASE: process.env.POSTGRES_DATABASE || 'not found',
      POSTGRES_USER: process.env.POSTGRES_USER || 'not found',
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD ? '***' : 'not found',
      POSTGRES_URL: process.env.POSTGRES_URL || 'not found',
      
      // 当前的
      DATABASE_URL_HOST: process.env.DATABASE_URL?.split('@')[1]?.split('/')[0] || 'not found'
    }
    
    return Response.json({ 
      success: true,
      timestamp: new Date().toISOString(),
      info: dbInfo
    })
  } catch (error: any) {
    return Response.json({ 
      success: false,
      error: error.message 
    }, { status: 500 })
  }
}
