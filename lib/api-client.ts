/**
 * API请求封装
 */

// 基础API地址
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

// 请求配置接口
interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

/**
 * 发起API请求
 * @param endpoint API端点
 * @param options 请求选项
 * @returns Promise
 */
async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  // 构建完整URL
  let url = `${BASE_URL}${endpoint}`;
  
  // 处理查询参数
  if (options.params) {
    const searchParams = new URLSearchParams();
    Object.keys(options.params).forEach(key => {
      searchParams.append(key, String(options.params![key]));
    });
    url += `?${searchParams.toString()}`;
  }
  
  // 默认请求头
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  // 构造请求配置
  const config: RequestInit = {
    ...options,
    headers,
  };
  
  try {
    const response = await fetch(url, config);
    
    // 检查响应状态
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 解析JSON响应
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * GET请求
 */
export function get<T>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>) {
  return request<T>(endpoint, { ...options, method: 'GET' });
}

/**
 * POST请求
 */
export function post<T>(endpoint: string, data?: unknown, options?: Omit<RequestOptions, 'method' | 'body'>) {
  return request<T>(endpoint, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });
}

/**
 * PUT请求
 */
export function put<T>(endpoint: string, data?: unknown, options?: Omit<RequestOptions, 'method' | 'body'>) {
  return request<T>(endpoint, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });
}

/**
 * DELETE请求
 */
export function del<T>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>) {
  return request<T>(endpoint, { ...options, method: 'DELETE' });
}