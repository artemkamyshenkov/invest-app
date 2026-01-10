'use client';

import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@workspace/ui/components/toggleGroup';
import { LoginForm } from './login';
import { RegisterForm } from './register';

export const AuthForm = () => {
  const [mode, setMode] = useState<string>('login');

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-6">
            <ToggleGroup type="single" value={mode} onValueChange={setMode}>
              <ToggleGroupItem value="login">Вход</ToggleGroupItem>
              <ToggleGroupItem value="register">Регистрация</ToggleGroupItem>
            </ToggleGroup>
          </div>
          {mode === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};
