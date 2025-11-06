"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Password login:", { phone, password, rememberMe });
    // TODO: Implement login logic
  };

  const handleCodeLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Code login:", { phone, verificationCode });
    // TODO: Implement verification code login logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-44 w-3 h-3 bg-yellow-300 rounded-full opacity-80" />
        <div className="absolute top-24 right-56 w-3 h-3 bg-yellow-300 rounded-full opacity-80" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-yellow-300 rounded-full opacity-80" />

        {/* Isometric cubes decoration */}
        <div className="absolute top-32 left-48 w-24 h-24 bg-blue-400/20 transform rotate-45 rounded-lg" />
        <div className="absolute bottom-48 left-32 w-32 h-32 bg-blue-400/20 transform rotate-45 rounded-lg" />
        <div className="absolute top-1/4 right-32 w-40 h-40 bg-blue-300/20 transform rotate-45 rounded-lg" />
        <div className="absolute bottom-32 right-48 w-48 h-48 bg-blue-400/30 transform rotate-45 rounded-lg" />
      </div>

      {/* Login card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-5xl mx-4 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Illustration */}
          <div className="md:w-1/2 p-12 flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-blue-600 mb-2">
                心植智源
              </h1>
              {/*
                根据项目规范，将包含特殊字符的文本提取到变量中以避免转义问题
                原文本: 全面呵护护"心"希望
              */}
              <p className="text-blue-400 text-sm">全面呵护护&quot;心&quot;希望</p>
            </div>
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/login-illustration.png"
                alt="Medical System Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <Tabs defaultValue="password" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="password">密码登录</TabsTrigger>
                <TabsTrigger value="code">验证码登录</TabsTrigger>
              </TabsList>

              {/* Password login */}
              <TabsContent value="password">
                <form onSubmit={handlePasswordLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="手机号/账号"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-12 bg-gray-50 border-gray-200"
                    />
                  </div>

                  <div className="space-y-2 relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="密码"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 bg-gray-50 border-gray-200 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) =>
                          setRememberMe(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="remember"
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        记住密码
                      </Label>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-gray-400 hover:text-gray-600"
                    >
                      忘记密码
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-teal-500 hover:bg-teal-600 text-white text-base font-medium"
                  >
                    登录
                  </Button>
                </form>
              </TabsContent>

              {/* Verification code login */}
              <TabsContent value="code">
                <form onSubmit={handleCodeLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="手机号"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-12 bg-gray-50 border-gray-200"
                    />
                  </div>

                  <div className="space-y-2 flex gap-2">
                    <Input
                      type="text"
                      placeholder="验证码"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="h-12 bg-gray-50 border-gray-200 flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 px-6 whitespace-nowrap bg-transparent"
                    >
                      获取验证码
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-teal-500 hover:bg-teal-600 text-white text-base font-medium"
                  >
                    登录
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-white text-sm">
        Copyright ©2025-2026 MS WAGN All Rights Reserved.粤ICP备###号
      </div>
    </div>
  );
}
