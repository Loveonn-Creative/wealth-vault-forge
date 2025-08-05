export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      access_protocol_submissions: {
        Row: {
          ai_recommendation: Json | null
          created_at: string
          email: string
          encrypted_data: Json | null
          experience_level: string | null
          full_name: string
          gate_completed: number | null
          id: string
          investment_amount: number
          investment_intent: string
          objectives: string | null
          phone: string | null
          portfolio_mirror_generated: boolean | null
          risk_tolerance: string | null
          submission_status: string | null
          updated_at: string
          user_id: string | null
          verification_completed: boolean | null
        }
        Insert: {
          ai_recommendation?: Json | null
          created_at?: string
          email: string
          encrypted_data?: Json | null
          experience_level?: string | null
          full_name: string
          gate_completed?: number | null
          id?: string
          investment_amount: number
          investment_intent: string
          objectives?: string | null
          phone?: string | null
          portfolio_mirror_generated?: boolean | null
          risk_tolerance?: string | null
          submission_status?: string | null
          updated_at?: string
          user_id?: string | null
          verification_completed?: boolean | null
        }
        Update: {
          ai_recommendation?: Json | null
          created_at?: string
          email?: string
          encrypted_data?: Json | null
          experience_level?: string | null
          full_name?: string
          gate_completed?: number | null
          id?: string
          investment_amount?: number
          investment_intent?: string
          objectives?: string | null
          phone?: string | null
          portfolio_mirror_generated?: boolean | null
          risk_tolerance?: string | null
          submission_status?: string | null
          updated_at?: string
          user_id?: string | null
          verification_completed?: boolean | null
        }
        Relationships: []
      }
      access_submissions: {
        Row: {
          created_at: string
          email: string
          full_name: string
          gate_status: number | null
          id: string
          intent: string
          investment_amount: number
          payment_completed: boolean | null
          phone: string | null
          updated_at: string
          user_id: string | null
          verification_completed: boolean | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          gate_status?: number | null
          id?: string
          intent: string
          investment_amount: number
          payment_completed?: boolean | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
          verification_completed?: boolean | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          gate_status?: number | null
          id?: string
          intent?: string
          investment_amount?: number
          payment_completed?: boolean | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
          verification_completed?: boolean | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean | null
          message: string
          metadata: Json | null
          notification_type: string
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message: string
          metadata?: Json | null
          notification_type: string
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string
          metadata?: Json | null
          notification_type?: string
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      payment_records: {
        Row: {
          access_submission_id: string | null
          amount: number
          created_at: string
          currency: string | null
          id: string
          payment_method: string
          payment_reference: string | null
          payment_status: string | null
          updated_at: string
          user_id: string | null
          verification_notes: string | null
          verification_screenshot: string | null
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          access_submission_id?: string | null
          amount: number
          created_at?: string
          currency?: string | null
          id?: string
          payment_method: string
          payment_reference?: string | null
          payment_status?: string | null
          updated_at?: string
          user_id?: string | null
          verification_notes?: string | null
          verification_screenshot?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          access_submission_id?: string | null
          amount?: number
          created_at?: string
          currency?: string | null
          id?: string
          payment_method?: string
          payment_reference?: string | null
          payment_status?: string | null
          updated_at?: string
          user_id?: string | null
          verification_notes?: string | null
          verification_screenshot?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_records_access_submission_id_fkey"
            columns: ["access_submission_id"]
            isOneToOne: false
            referencedRelation: "access_protocol_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          access_submission_id: string | null
          amount: number
          created_at: string
          id: string
          payment_method: string | null
          status: string | null
          transaction_id: string | null
          user_id: string | null
        }
        Insert: {
          access_submission_id?: string | null
          amount: number
          created_at?: string
          id?: string
          payment_method?: string | null
          status?: string | null
          transaction_id?: string | null
          user_id?: string | null
        }
        Update: {
          access_submission_id?: string | null
          amount?: number
          created_at?: string
          id?: string
          payment_method?: string | null
          status?: string | null
          transaction_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_access_submission_id_fkey"
            columns: ["access_submission_id"]
            isOneToOne: false
            referencedRelation: "access_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          account_locked_until: string | null
          ai_personalization: Json | null
          client_id: string | null
          created_at: string
          document_verification_status: string | null
          failed_login_attempts: number | null
          full_name: string | null
          id: string
          intent: string | null
          investment_amount: number | null
          investment_tier: string | null
          kyc_status: string | null
          last_login: string | null
          onboarding_completed: boolean | null
          phone: string | null
          preferred_contact_method: string | null
          risk_profile: Json | null
          tier_placement: string | null
          two_factor_enabled: boolean | null
          updated_at: string
          user_id: string
          verification_status: string | null
        }
        Insert: {
          account_locked_until?: string | null
          ai_personalization?: Json | null
          client_id?: string | null
          created_at?: string
          document_verification_status?: string | null
          failed_login_attempts?: number | null
          full_name?: string | null
          id?: string
          intent?: string | null
          investment_amount?: number | null
          investment_tier?: string | null
          kyc_status?: string | null
          last_login?: string | null
          onboarding_completed?: boolean | null
          phone?: string | null
          preferred_contact_method?: string | null
          risk_profile?: Json | null
          tier_placement?: string | null
          two_factor_enabled?: boolean | null
          updated_at?: string
          user_id: string
          verification_status?: string | null
        }
        Update: {
          account_locked_until?: string | null
          ai_personalization?: Json | null
          client_id?: string | null
          created_at?: string
          document_verification_status?: string | null
          failed_login_attempts?: number | null
          full_name?: string | null
          id?: string
          intent?: string | null
          investment_amount?: number | null
          investment_tier?: string | null
          kyc_status?: string | null
          last_login?: string | null
          onboarding_completed?: boolean | null
          phone?: string | null
          preferred_contact_method?: string | null
          risk_profile?: Json | null
          tier_placement?: string | null
          two_factor_enabled?: boolean | null
          updated_at?: string
          user_id?: string
          verification_status?: string | null
        }
        Relationships: []
      }
      quiz_responses: {
        Row: {
          answer: string
          created_at: string
          id: string
          question: string
          quiz_type: string | null
          user_id: string
        }
        Insert: {
          answer: string
          created_at?: string
          id?: string
          question: string
          quiz_type?: string | null
          user_id: string
        }
        Update: {
          answer?: string
          created_at?: string
          id?: string
          question?: string
          quiz_type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      research_requests: {
        Row: {
          created_at: string
          email: string
          id: string
          intent: string
          name: string
          phone: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          intent: string
          name: string
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          intent?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      user_block_assignments: {
        Row: {
          assignment_date: string | null
          assignment_status: string | null
          block_id: string | null
          created_at: string
          id: string
          investment_amount: number
          performance_tracking: Json | null
          user_id: string | null
        }
        Insert: {
          assignment_date?: string | null
          assignment_status?: string | null
          block_id?: string | null
          created_at?: string
          id?: string
          investment_amount: number
          performance_tracking?: Json | null
          user_id?: string | null
        }
        Update: {
          assignment_date?: string | null
          assignment_status?: string | null
          block_id?: string | null
          created_at?: string
          id?: string
          investment_amount?: number
          performance_tracking?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_block_assignments_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "wealth_blocks"
            referencedColumns: ["id"]
          },
        ]
      }
      wealth_blocks: {
        Row: {
          block_code: string
          block_name: string
          block_status: string | null
          closure_date: string | null
          created_at: string
          current_capacity: number | null
          description: string | null
          id: string
          launch_date: string | null
          max_capacity: number | null
          minimum_investment: number | null
          performance_data: Json | null
          risk_level: string | null
          roi_range: string | null
          updated_at: string
        }
        Insert: {
          block_code: string
          block_name: string
          block_status?: string | null
          closure_date?: string | null
          created_at?: string
          current_capacity?: number | null
          description?: string | null
          id?: string
          launch_date?: string | null
          max_capacity?: number | null
          minimum_investment?: number | null
          performance_data?: Json | null
          risk_level?: string | null
          roi_range?: string | null
          updated_at?: string
        }
        Update: {
          block_code?: string
          block_name?: string
          block_status?: string | null
          closure_date?: string | null
          created_at?: string
          current_capacity?: number | null
          description?: string | null
          id?: string
          launch_date?: string | null
          max_capacity?: number | null
          minimum_investment?: number | null
          performance_data?: Json | null
          risk_level?: string | null
          roi_range?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      wealth_simulations: {
        Row: {
          ai_output: Json
          allocation_strategy: Json | null
          created_at: string
          id: string
          input_data: Json
          projected_returns: Json | null
          risk_assessment: Json | null
          simulation_type: string | null
          user_id: string | null
        }
        Insert: {
          ai_output: Json
          allocation_strategy?: Json | null
          created_at?: string
          id?: string
          input_data: Json
          projected_returns?: Json | null
          risk_assessment?: Json | null
          simulation_type?: string | null
          user_id?: string | null
        }
        Update: {
          ai_output?: Json
          allocation_strategy?: Json | null
          created_at?: string
          id?: string
          input_data?: Json
          projected_returns?: Json | null
          risk_assessment?: Json | null
          simulation_type?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
