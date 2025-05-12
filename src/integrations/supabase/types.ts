export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievement_definitions: {
        Row: {
          created_at: string | null
          criteria: Json
          description: string
          icon: string | null
          id: string
          name: string
          points_reward: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          criteria: Json
          description: string
          icon?: string | null
          id?: string
          name: string
          points_reward?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          criteria?: Json
          description?: string
          icon?: string | null
          id?: string
          name?: string
          points_reward?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      achievement_progress: {
        Row: {
          achievement_id: string
          created_at: string | null
          current_progress: number | null
          id: string
          unlocked_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          achievement_id: string
          created_at?: string | null
          current_progress?: number | null
          id?: string
          unlocked_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          achievement_id?: string
          created_at?: string | null
          current_progress?: number | null
          id?: string
          unlocked_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "achievement_progress_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievement_rules"
            referencedColumns: ["id"]
          },
        ]
      }
      achievement_rules: {
        Row: {
          badge_icon: string | null
          category: string | null
          created_at: string | null
          description: string
          id: string
          level: number | null
          name: string
          points_reward: number | null
          rarity: string | null
          trigger_type: string
          trigger_value: number
          updated_at: string | null
        }
        Insert: {
          badge_icon?: string | null
          category?: string | null
          created_at?: string | null
          description: string
          id?: string
          level?: number | null
          name: string
          points_reward?: number | null
          rarity?: string | null
          trigger_type: string
          trigger_value: number
          updated_at?: string | null
        }
        Update: {
          badge_icon?: string | null
          category?: string | null
          created_at?: string | null
          description?: string
          id?: string
          level?: number | null
          name?: string
          points_reward?: number | null
          rarity?: string | null
          trigger_type?: string
          trigger_value?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      achievements: {
        Row: {
          category: string
          created_at: string | null
          criteria_key: string | null
          description: string
          featured: boolean | null
          icon: string | null
          id: string
          rarity: string
          title: string
          total: number
          updated_at: string | null
        }
        Insert: {
          category?: string
          created_at?: string | null
          criteria_key?: string | null
          description: string
          featured?: boolean | null
          icon?: string | null
          id: string
          rarity?: string
          title: string
          total?: number
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          criteria_key?: string | null
          description?: string
          featured?: boolean | null
          icon?: string | null
          id?: string
          rarity?: string
          title?: string
          total?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      activity_points_log: {
        Row: {
          activity_name: string | null
          activity_type: string
          created_at: string | null
          id: string
          points_earned: number
          user_id: string | null
        }
        Insert: {
          activity_name?: string | null
          activity_type: string
          created_at?: string | null
          id?: string
          points_earned: number
          user_id?: string | null
        }
        Update: {
          activity_name?: string | null
          activity_type?: string
          created_at?: string | null
          id?: string
          points_earned?: number
          user_id?: string | null
        }
        Relationships: []
      }
      affiliate_interactions: {
        Row: {
          affiliate_link: string | null
          created_at: string
          id: string
          interaction_type: string | null
          product_id: string | null
          user_id: string | null
        }
        Insert: {
          affiliate_link?: string | null
          created_at?: string
          id?: string
          interaction_type?: string | null
          product_id?: string | null
          user_id?: string | null
        }
        Update: {
          affiliate_link?: string | null
          created_at?: string
          id?: string
          interaction_type?: string | null
          product_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_interactions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "deprecated_smokeless_products"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_chat_checkin_messages: {
        Row: {
          checkin_instance_id: string
          content: string
          id: string
          metadata: Json | null
          sender_id: string | null
          sender_is_ai: boolean | null
          timestamp: string
        }
        Insert: {
          checkin_instance_id: string
          content: string
          id?: string
          metadata?: Json | null
          sender_id?: string | null
          sender_is_ai?: boolean | null
          timestamp?: string
        }
        Update: {
          checkin_instance_id?: string
          content?: string
          id?: string
          metadata?: Json | null
          sender_id?: string | null
          sender_is_ai?: boolean | null
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_chat_checkin_messages_checkin_instance_id_fkey"
            columns: ["checkin_instance_id"]
            isOneToOne: false
            referencedRelation: "care_checkin_instances"
            referencedColumns: ["id"]
          },
        ]
      }
      app_settings: {
        Row: {
          created_at: string | null
          key: string
          updated_at: string | null
          value: string
        }
        Insert: {
          created_at?: string | null
          key: string
          updated_at?: string | null
          value: string
        }
        Update: {
          created_at?: string | null
          key?: string
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      beverage_logs: {
        Row: {
          amount_ml: number
          beverage_type_id: string | null
          created_at: string | null
          custom_name: string | null
          id: string
          logged_at: string
          user_id: string
        }
        Insert: {
          amount_ml: number
          beverage_type_id?: string | null
          created_at?: string | null
          custom_name?: string | null
          id?: string
          logged_at?: string
          user_id: string
        }
        Update: {
          amount_ml?: number
          beverage_type_id?: string | null
          created_at?: string | null
          custom_name?: string | null
          id?: string
          logged_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "beverage_logs_beverage_type_id_fkey"
            columns: ["beverage_type_id"]
            isOneToOne: false
            referencedRelation: "beverage_types"
            referencedColumns: ["id"]
          },
        ]
      }
      beverage_types: {
        Row: {
          alcohol_content: number | null
          caffeine_content: number | null
          calories: number | null
          created_at: string | null
          id: string
          name: string
          water_content: number
        }
        Insert: {
          alcohol_content?: number | null
          caffeine_content?: number | null
          calories?: number | null
          created_at?: string | null
          id?: string
          name: string
          water_content?: number
        }
        Update: {
          alcohol_content?: number | null
          caffeine_content?: number | null
          calories?: number | null
          created_at?: string | null
          id?: string
          name?: string
          water_content?: number
        }
        Relationships: []
      }
      blocked_items: {
        Row: {
          created_at: string
          id: string
          type: string
          user_id: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          type: string
          user_id: string
          value: string
        }
        Update: {
          created_at?: string
          id?: string
          type?: string
          user_id?: string
          value?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_id: string | null
          content: string
          created_at: string
          excerpt: string | null
          id: number
          image_url: string | null
          is_published: boolean
          published_at: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          id?: number
          image_url?: string | null
          is_published?: boolean
          published_at?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          id?: number
          image_url?: string | null
          is_published?: boolean
          published_at?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      board_members: {
        Row: {
          board_id: string
          created_at: string
          role: string
          user_id: string
        }
        Insert: {
          board_id: string
          created_at?: string
          role?: string
          user_id: string
        }
        Update: {
          board_id?: string
          created_at?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "board_members_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "kanban_boards"
            referencedColumns: ["id"]
          },
        ]
      }
      breathing_sessions: {
        Row: {
          completed_rounds: number
          created_at: string | null
          duration_seconds: number
          energy_after: number | null
          id: string
          mood_after: number | null
          notes: string | null
          project_id: string | null
          stress_after: number | null
          technique_id: string
          technique_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed_rounds: number
          created_at?: string | null
          duration_seconds: number
          energy_after?: number | null
          id?: string
          mood_after?: number | null
          notes?: string | null
          project_id?: string | null
          stress_after?: number | null
          technique_id: string
          technique_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed_rounds?: number
          created_at?: string | null
          duration_seconds?: number
          energy_after?: number | null
          id?: string
          mood_after?: number | null
          notes?: string | null
          project_id?: string | null
          stress_after?: number | null
          technique_id?: string
          technique_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      breathing_techniques: {
        Row: {
          benefits: string[] | null
          category: string | null
          created_at: string
          default_rounds: number
          description: string | null
          difficulty: string | null
          exhale_duration: number
          hold1_duration: number
          hold2_duration: number
          id: string
          image_url: string | null
          inhale_duration: number
          instructions: string | null
          name: string
          updated_at: string
        }
        Insert: {
          benefits?: string[] | null
          category?: string | null
          created_at?: string
          default_rounds: number
          description?: string | null
          difficulty?: string | null
          exhale_duration: number
          hold1_duration?: number
          hold2_duration?: number
          id?: string
          image_url?: string | null
          inhale_duration: number
          instructions?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          benefits?: string[] | null
          category?: string | null
          created_at?: string
          default_rounds?: number
          description?: string | null
          difficulty?: string | null
          exhale_duration?: number
          hold1_duration?: number
          hold2_duration?: number
          id?: string
          image_url?: string | null
          inhale_duration?: number
          instructions?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      caffeine_logs: {
        Row: {
          amount_mg: number
          beverage_type: string | null
          consumed_at: string
          created_at: string | null
          energy_rating: number | null
          id: string
          notes: string | null
          user_id: string
        }
        Insert: {
          amount_mg: number
          beverage_type?: string | null
          consumed_at: string
          created_at?: string | null
          energy_rating?: number | null
          id?: string
          notes?: string | null
          user_id: string
        }
        Update: {
          amount_mg?: number
          beverage_type?: string | null
          consumed_at?: string
          created_at?: string | null
          energy_rating?: number | null
          id?: string
          notes?: string | null
          user_id?: string
        }
        Relationships: []
      }
      calendar_events: {
        Row: {
          all_day: boolean
          assigned_member_ids: string[] | null
          category: Database["public"]["Enums"]["event_category_enum"] | null
          color: string | null
          created_at: string
          created_by_user_id: string
          description: string | null
          end_time: string | null
          group_id: string | null
          id: string
          is_recurring: boolean | null
          location: string | null
          recurrence_rule: string | null
          reminder_config: Json | null
          shared_with_category_ids: string[] | null
          shared_with_member_ids: string[] | null
          start_time: string
          title: string
          updated_at: string
          visibility: string
          visible_to_member_category_ids: string[] | null
          visible_to_member_ids: string[] | null
        }
        Insert: {
          all_day?: boolean
          assigned_member_ids?: string[] | null
          category?: Database["public"]["Enums"]["event_category_enum"] | null
          color?: string | null
          created_at?: string
          created_by_user_id: string
          description?: string | null
          end_time?: string | null
          group_id?: string | null
          id?: string
          is_recurring?: boolean | null
          location?: string | null
          recurrence_rule?: string | null
          reminder_config?: Json | null
          shared_with_category_ids?: string[] | null
          shared_with_member_ids?: string[] | null
          start_time: string
          title: string
          updated_at?: string
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Update: {
          all_day?: boolean
          assigned_member_ids?: string[] | null
          category?: Database["public"]["Enums"]["event_category_enum"] | null
          color?: string | null
          created_at?: string
          created_by_user_id?: string
          description?: string | null
          end_time?: string | null
          group_id?: string | null
          id?: string
          is_recurring?: boolean | null
          location?: string | null
          recurrence_rule?: string | null
          reminder_config?: Json | null
          shared_with_category_ids?: string[] | null
          shared_with_member_ids?: string[] | null
          start_time?: string
          title?: string
          updated_at?: string
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Relationships: []
      }
      care_checkin_bookings: {
        Row: {
          booking_status: string
          carecheckiner_id: string | null
          checkin_type: string
          created_at: string | null
          duration_minutes: number | null
          id: string
          is_recurring: boolean | null
          next_occurrence: string | null
          notes_for_checkiner: string | null
          recipient_contact: string
          recipient_name: string
          recurrence_pattern: string | null
          scheduled_datetime: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          booking_status?: string
          carecheckiner_id?: string | null
          checkin_type: string
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          is_recurring?: boolean | null
          next_occurrence?: string | null
          notes_for_checkiner?: string | null
          recipient_contact: string
          recipient_name: string
          recurrence_pattern?: string | null
          scheduled_datetime: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          booking_status?: string
          carecheckiner_id?: string | null
          checkin_type?: string
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          is_recurring?: boolean | null
          next_occurrence?: string | null
          notes_for_checkiner?: string | null
          recipient_contact?: string
          recipient_name?: string
          recurrence_pattern?: string | null
          scheduled_datetime?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_checkin_bookings_carecheckiner_id_fkey"
            columns: ["carecheckiner_id"]
            isOneToOne: false
            referencedRelation: "carecheckiner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      care_checkin_configs: {
        Row: {
          ai_chat_config: Json | null
          assigned_checkiner_id: string | null
          care_group_id: string
          care_recipient_id: string
          checkin_type: Database["public"]["Enums"]["checkin_type"]
          created_at: string
          created_by_id: string
          cron_schedule: string | null
          description: string | null
          id: string
          is_active: boolean | null
          next_due_at: string | null
          prompt_questions: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          ai_chat_config?: Json | null
          assigned_checkiner_id?: string | null
          care_group_id: string
          care_recipient_id: string
          checkin_type?: Database["public"]["Enums"]["checkin_type"]
          created_at?: string
          created_by_id: string
          cron_schedule?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          next_due_at?: string | null
          prompt_questions?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          ai_chat_config?: Json | null
          assigned_checkiner_id?: string | null
          care_group_id?: string
          care_recipient_id?: string
          checkin_type?: Database["public"]["Enums"]["checkin_type"]
          created_at?: string
          created_by_id?: string
          cron_schedule?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          next_due_at?: string | null
          prompt_questions?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_checkin_configs_care_recipient_id_fkey"
            columns: ["care_recipient_id"]
            isOneToOne: false
            referencedRelation: "care_recipients"
            referencedColumns: ["id"]
          },
        ]
      }
      care_checkin_instances: {
        Row: {
          ai_chat_session_id: string | null
          care_group_id: string
          care_recipient_id: string
          checkin_type: Database["public"]["Enums"]["checkin_type"]
          checkiner_id: string | null
          completed_at: string | null
          config_id: string | null
          created_at: string
          id: string
          initiated_at: string | null
          initiated_by_id: string | null
          notes: string | null
          responses: Json | null
          scheduled_at: string | null
          status: Database["public"]["Enums"]["checkin_status"]
          summary: string | null
          updated_at: string
        }
        Insert: {
          ai_chat_session_id?: string | null
          care_group_id: string
          care_recipient_id: string
          checkin_type: Database["public"]["Enums"]["checkin_type"]
          checkiner_id?: string | null
          completed_at?: string | null
          config_id?: string | null
          created_at?: string
          id?: string
          initiated_at?: string | null
          initiated_by_id?: string | null
          notes?: string | null
          responses?: Json | null
          scheduled_at?: string | null
          status?: Database["public"]["Enums"]["checkin_status"]
          summary?: string | null
          updated_at?: string
        }
        Update: {
          ai_chat_session_id?: string | null
          care_group_id?: string
          care_recipient_id?: string
          checkin_type?: Database["public"]["Enums"]["checkin_type"]
          checkiner_id?: string | null
          completed_at?: string | null
          config_id?: string | null
          created_at?: string
          id?: string
          initiated_at?: string | null
          initiated_by_id?: string | null
          notes?: string | null
          responses?: Json | null
          scheduled_at?: string | null
          status?: Database["public"]["Enums"]["checkin_status"]
          summary?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_checkin_instances_care_recipient_id_fkey"
            columns: ["care_recipient_id"]
            isOneToOne: false
            referencedRelation: "care_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_checkin_instances_config_id_fkey"
            columns: ["config_id"]
            isOneToOne: false
            referencedRelation: "care_checkin_configs"
            referencedColumns: ["id"]
          },
        ]
      }
      care_checkiners: {
        Row: {
          checkin_types: string[]
          contact_info: string
          created_at: string
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          checkin_types?: string[]
          contact_info: string
          created_at?: string
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          checkin_types?: string[]
          contact_info?: string
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      care_group_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      care_group_invitations: {
        Row: {
          care_group_id: string
          created_at: string | null
          expires_at: string | null
          id: string
          invited_by_user_id: string
          invitee_email: string
          invitee_name: string | null
          member_category_id: string | null
          role: string | null
          status: string | null
          token: string | null
          updated_at: string | null
        }
        Insert: {
          care_group_id: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          invited_by_user_id: string
          invitee_email: string
          invitee_name?: string | null
          member_category_id?: string | null
          role?: string | null
          status?: string | null
          token?: string | null
          updated_at?: string | null
        }
        Update: {
          care_group_id?: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          invited_by_user_id?: string
          invitee_email?: string
          invitee_name?: string | null
          member_category_id?: string | null
          role?: string | null
          status?: string | null
          token?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_group_join_requests: {
        Row: {
          care_group_id: string
          created_at: string | null
          id: string
          message: string | null
          profile_id: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          care_group_id: string
          created_at?: string | null
          id?: string
          message?: string | null
          profile_id: string
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          care_group_id?: string
          created_at?: string | null
          id?: string
          message?: string | null
          profile_id?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_group_join_requests_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_member_assigned_categories: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          care_group_member_id: string
          id: string
          member_category_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          care_group_member_id: string
          id?: string
          member_category_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          care_group_member_id?: string
          id?: string
          member_category_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_group_member_assigned_categories_care_group_member_id_fkey"
            columns: ["care_group_member_id"]
            isOneToOne: false
            referencedRelation: "care_group_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_group_member_assigned_categories_member_category_id_fkey"
            columns: ["member_category_id"]
            isOneToOne: false
            referencedRelation: "member_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_members: {
        Row: {
          can_manage_financials: boolean | null
          can_manage_legal_affairs: boolean | null
          can_view_reports: boolean | null
          group_id: string
          id: string
          invited_by: string | null
          joined_at: string
          member_categories: string[] | null
          role: Database["public"]["Enums"]["care_group_member_role"]
          status: string | null
          user_id: string
        }
        Insert: {
          can_manage_financials?: boolean | null
          can_manage_legal_affairs?: boolean | null
          can_view_reports?: boolean | null
          group_id: string
          id?: string
          invited_by?: string | null
          joined_at?: string
          member_categories?: string[] | null
          role?: Database["public"]["Enums"]["care_group_member_role"]
          status?: string | null
          user_id: string
        }
        Update: {
          can_manage_financials?: boolean | null
          can_manage_legal_affairs?: boolean | null
          can_view_reports?: boolean | null
          group_id?: string
          id?: string
          invited_by?: string | null
          joined_at?: string
          member_categories?: string[] | null
          role?: Database["public"]["Enums"]["care_group_member_role"]
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      care_group_message_attachments: {
        Row: {
          created_at: string
          file_name: string
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          message_id: string
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string
          file_name: string
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          message_id: string
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          message_id?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "care_group_message_attachments_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "group_discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_message_replies: {
        Row: {
          attachments: Json | null
          created_at: string
          group_id: string
          id: string
          message: string
          parent_message_id: string
          sender_id: string
          updated_at: string
        }
        Insert: {
          attachments?: Json | null
          created_at?: string
          group_id: string
          id?: string
          message: string
          parent_message_id: string
          sender_id: string
          updated_at?: string
        }
        Update: {
          attachments?: Json | null
          created_at?: string
          group_id?: string
          id?: string
          message?: string
          parent_message_id?: string
          sender_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_group_message_replies_parent_message_id_fkey"
            columns: ["parent_message_id"]
            isOneToOne: false
            referencedRelation: "group_discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_messages: {
        Row: {
          created_at: string | null
          group_id: string
          id: string
          message: string
          sender_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          group_id: string
          id?: string
          message: string
          sender_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string
          id?: string
          message?: string
          sender_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      care_group_subgroup_members: {
        Row: {
          joined_at: string
          role: string
          subgroup_id: string
          user_id: string
        }
        Insert: {
          joined_at?: string
          role?: string
          subgroup_id: string
          user_id: string
        }
        Update: {
          joined_at?: string
          role?: string
          subgroup_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_group_subgroup_members_subgroup_id_fkey"
            columns: ["subgroup_id"]
            isOneToOne: false
            referencedRelation: "care_group_subgroups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_group_subgroup_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_subgroups: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          group_id: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          group_id: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          group_id?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_group_subgroups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_task_assignees: {
        Row: {
          assigned_at: string
          task_id: string
          user_id: string
        }
        Insert: {
          assigned_at?: string
          task_id: string
          user_id: string
        }
        Update: {
          assigned_at?: string
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_group_task_assignees_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_tasks: {
        Row: {
          category: string | null
          checklist: Json | null
          completed_at: string | null
          created_at: string
          created_by: string | null
          default_assignee_role: string | null
          description: string | null
          due_date: string | null
          estimated_duration: string | null
          group_id: string
          id: string
          notes: string | null
          parent_recurring_task_id: string | null
          parent_task_id: string | null
          priority: Database["public"]["Enums"]["task_priority"]
          recurrence_pattern: Json | null
          recurring: boolean | null
          shared_with_category_ids: string[] | null
          shared_with_member_ids: string[] | null
          status: Database["public"]["Enums"]["task_status"]
          sub_tasks_template: Json | null
          subgroup_id: string | null
          title: string
          updated_at: string
          visibility: string
          visible_to_member_category_ids: string[] | null
          visible_to_member_ids: string[] | null
        }
        Insert: {
          category?: string | null
          checklist?: Json | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          default_assignee_role?: string | null
          description?: string | null
          due_date?: string | null
          estimated_duration?: string | null
          group_id: string
          id?: string
          notes?: string | null
          parent_recurring_task_id?: string | null
          parent_task_id?: string | null
          priority?: Database["public"]["Enums"]["task_priority"]
          recurrence_pattern?: Json | null
          recurring?: boolean | null
          shared_with_category_ids?: string[] | null
          shared_with_member_ids?: string[] | null
          status?: Database["public"]["Enums"]["task_status"]
          sub_tasks_template?: Json | null
          subgroup_id?: string | null
          title: string
          updated_at?: string
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Update: {
          category?: string | null
          checklist?: Json | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          default_assignee_role?: string | null
          description?: string | null
          due_date?: string | null
          estimated_duration?: string | null
          group_id?: string
          id?: string
          notes?: string | null
          parent_recurring_task_id?: string | null
          parent_task_id?: string | null
          priority?: Database["public"]["Enums"]["task_priority"]
          recurrence_pattern?: Json | null
          recurring?: boolean | null
          shared_with_category_ids?: string[] | null
          shared_with_member_ids?: string[] | null
          status?: Database["public"]["Enums"]["task_status"]
          sub_tasks_template?: Json | null
          subgroup_id?: string | null
          title?: string
          updated_at?: string
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "care_group_tasks_parent_recurring_task_id_fkey"
            columns: ["parent_recurring_task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_group_tasks_parent_task_id_fkey"
            columns: ["parent_task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_group_tasks_subgroup_id_fkey"
            columns: ["subgroup_id"]
            isOneToOne: false
            referencedRelation: "care_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_update_attachments: {
        Row: {
          file_name: string | null
          file_type: string | null
          file_url: string
          id: string
          update_id: string
          uploaded_at: string
          uploader_id: string | null
        }
        Insert: {
          file_name?: string | null
          file_type?: string | null
          file_url: string
          id?: string
          update_id: string
          uploaded_at?: string
          uploader_id?: string | null
        }
        Update: {
          file_name?: string | null
          file_type?: string | null
          file_url?: string
          id?: string
          update_id?: string
          uploaded_at?: string
          uploader_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "care_group_update_attachments_update_id_fkey"
            columns: ["update_id"]
            isOneToOne: false
            referencedRelation: "care_group_updates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_group_update_attachments_uploader_id_fkey"
            columns: ["uploader_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_update_comments: {
        Row: {
          comment_text: string
          created_at: string
          id: string
          parent_comment_id: string | null
          subgroup_id: string | null
          update_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          comment_text: string
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          subgroup_id?: string | null
          update_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          comment_text?: string
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          subgroup_id?: string | null
          update_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_group_update_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "care_group_update_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_group_update_comments_subgroup_id_fkey"
            columns: ["subgroup_id"]
            isOneToOne: false
            referencedRelation: "care_group_subgroups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_group_update_comments_update_id_fkey"
            columns: ["update_id"]
            isOneToOne: false
            referencedRelation: "care_group_updates"
            referencedColumns: ["id"]
          },
        ]
      }
      care_group_updates: {
        Row: {
          ai_augmented_content: Json | null
          ai_summary: string | null
          category: string | null
          content: string | null
          created_at: string
          group_id: string
          id: string
          last_augmented_by_ai_at: string | null
          media_urls: string[] | null
          pinned: boolean
          reactions: Json | null
          subgroup_id: string | null
          tags: string[] | null
          updated_at: string
          user_id: string
          visible_to_categories: string[] | null
        }
        Insert: {
          ai_augmented_content?: Json | null
          ai_summary?: string | null
          category?: string | null
          content?: string | null
          created_at?: string
          group_id: string
          id?: string
          last_augmented_by_ai_at?: string | null
          media_urls?: string[] | null
          pinned?: boolean
          reactions?: Json | null
          subgroup_id?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id: string
          visible_to_categories?: string[] | null
        }
        Update: {
          ai_augmented_content?: Json | null
          ai_summary?: string | null
          category?: string | null
          content?: string | null
          created_at?: string
          group_id?: string
          id?: string
          last_augmented_by_ai_at?: string | null
          media_urls?: string[] | null
          pinned?: boolean
          reactions?: Json | null
          subgroup_id?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string
          visible_to_categories?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "care_group_updates_subgroup_id_fkey"
            columns: ["subgroup_id"]
            isOneToOne: false
            referencedRelation: "care_group_subgroups"
            referencedColumns: ["id"]
          },
        ]
      }
      care_groups: {
        Row: {
          avatar_url: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          is_archived: boolean | null
          is_public: boolean
          location: string | null
          name: string
          privacy_setting: string
          rules_guidelines: string | null
          tags: string | null
          updated_at: string
          welcome_message: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_archived?: boolean | null
          is_public?: boolean
          location?: string | null
          name: string
          privacy_setting?: string
          rules_guidelines?: string | null
          tags?: string | null
          updated_at?: string
          welcome_message?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_archived?: boolean | null
          is_public?: boolean
          location?: string | null
          name?: string
          privacy_setting?: string
          rules_guidelines?: string | null
          tags?: string | null
          updated_at?: string
          welcome_message?: string | null
        }
        Relationships: []
      }
      care_note_shares: {
        Row: {
          can_edit: boolean | null
          care_note_id: string
          id: string
          shared_at: string
          shared_by_user_id: string
          shared_with_user_id: string
        }
        Insert: {
          can_edit?: boolean | null
          care_note_id: string
          id?: string
          shared_at?: string
          shared_by_user_id: string
          shared_with_user_id: string
        }
        Update: {
          can_edit?: boolean | null
          care_note_id?: string
          id?: string
          shared_at?: string
          shared_by_user_id?: string
          shared_with_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_note_shares_care_note_id_fkey"
            columns: ["care_note_id"]
            isOneToOne: false
            referencedRelation: "care_notes"
            referencedColumns: ["id"]
          },
        ]
      }
      care_notes: {
        Row: {
          ai_augmented_content: Json | null
          ai_summary: string | null
          attachments: Json | null
          author_id: string
          care_group_id: string
          care_recipient_id: string
          category: Database["public"]["Enums"]["care_note_category"] | null
          content: string
          created_at: string
          created_by_user_id: string
          for_virtual_companionship: boolean | null
          group_id: string
          id: string
          is_private: boolean | null
          last_augmented_by_ai_at: string | null
          note_category: string | null
          note_type: Database["public"]["Enums"]["care_note_type"]
          related_symptom: string | null
          tags: string[] | null
          title: string | null
          updated_at: string
          visibility: string
          visible_to_member_category_ids: string[] | null
          visible_to_member_ids: string[] | null
        }
        Insert: {
          ai_augmented_content?: Json | null
          ai_summary?: string | null
          attachments?: Json | null
          author_id: string
          care_group_id: string
          care_recipient_id: string
          category?: Database["public"]["Enums"]["care_note_category"] | null
          content: string
          created_at?: string
          created_by_user_id: string
          for_virtual_companionship?: boolean | null
          group_id: string
          id?: string
          is_private?: boolean | null
          last_augmented_by_ai_at?: string | null
          note_category?: string | null
          note_type?: Database["public"]["Enums"]["care_note_type"]
          related_symptom?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Update: {
          ai_augmented_content?: Json | null
          ai_summary?: string | null
          attachments?: Json | null
          author_id?: string
          care_group_id?: string
          care_recipient_id?: string
          category?: Database["public"]["Enums"]["care_note_category"] | null
          content?: string
          created_at?: string
          created_by_user_id?: string
          for_virtual_companionship?: boolean | null
          group_id?: string
          id?: string
          is_private?: boolean | null
          last_augmented_by_ai_at?: string | null
          note_category?: string | null
          note_type?: Database["public"]["Enums"]["care_note_type"]
          related_symptom?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "care_notes_care_recipient_id_fkey"
            columns: ["care_recipient_id"]
            isOneToOne: false
            referencedRelation: "care_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_notes_created_by_user_id_fkey"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_notes_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      care_plan_items: {
        Row: {
          assigned_to_user_id: string | null
          content: string
          created_at: string
          created_by: string | null
          due_date: string | null
          id: string
          is_completed: boolean | null
          item_type: string | null
          order_index: number | null
          section_id: string
          updated_at: string
        }
        Insert: {
          assigned_to_user_id?: string | null
          content: string
          created_at?: string
          created_by?: string | null
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          item_type?: string | null
          order_index?: number | null
          section_id: string
          updated_at?: string
        }
        Update: {
          assigned_to_user_id?: string | null
          content?: string
          created_at?: string
          created_by?: string | null
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          item_type?: string | null
          order_index?: number | null
          section_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_plan_items_assigned_to_user_id_fkey"
            columns: ["assigned_to_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_plan_items_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_plan_items_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "care_plan_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      care_plan_sections: {
        Row: {
          care_group_id: string
          content: Json
          created_at: string
          created_by: string | null
          id: string
          order_index: number
          section_type: string | null
          title: string
          updated_at: string
          updated_by: string | null
          version_history: Json[] | null
        }
        Insert: {
          care_group_id: string
          content: Json
          created_at?: string
          created_by?: string | null
          id?: string
          order_index?: number
          section_type?: string | null
          title: string
          updated_at?: string
          updated_by?: string | null
          version_history?: Json[] | null
        }
        Update: {
          care_group_id?: string
          content?: Json
          created_at?: string
          created_by?: string | null
          id?: string
          order_index?: number
          section_type?: string | null
          title?: string
          updated_at?: string
          updated_by?: string | null
          version_history?: Json[] | null
        }
        Relationships: []
      }
      care_recipient_contacts: {
        Row: {
          address: string | null
          care_group_id: string | null
          category: string | null
          created_at: string | null
          email: string | null
          id: string
          is_emergency: boolean | null
          name: string
          notes: string | null
          phone: string | null
          relationship: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          care_group_id?: string | null
          category?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          is_emergency?: boolean | null
          name: string
          notes?: string | null
          phone?: string | null
          relationship?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          care_group_id?: string | null
          category?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          is_emergency?: boolean | null
          name?: string
          notes?: string | null
          phone?: string | null
          relationship?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_recipient_status_updates: {
        Row: {
          attachments: Json | null
          created_at: string
          group_id: string
          id: string
          is_archived: boolean
          mood_emoji: string | null
          recipient_id: string | null
          related_task_id: string | null
          reported_at: string
          reported_by_user_id: string | null
          severity_level: number | null
          status_text: string
          update_type: string | null
          updated_at: string
          vital_signs: Json | null
        }
        Insert: {
          attachments?: Json | null
          created_at?: string
          group_id: string
          id?: string
          is_archived?: boolean
          mood_emoji?: string | null
          recipient_id?: string | null
          related_task_id?: string | null
          reported_at?: string
          reported_by_user_id?: string | null
          severity_level?: number | null
          status_text: string
          update_type?: string | null
          updated_at?: string
          vital_signs?: Json | null
        }
        Update: {
          attachments?: Json | null
          created_at?: string
          group_id?: string
          id?: string
          is_archived?: boolean
          mood_emoji?: string | null
          recipient_id?: string | null
          related_task_id?: string | null
          reported_at?: string
          reported_by_user_id?: string | null
          severity_level?: number | null
          status_text?: string
          update_type?: string | null
          updated_at?: string
          vital_signs?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "care_recipient_status_updates_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "care_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_recipient_status_updates_related_task_id_fkey"
            columns: ["related_task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      care_recipients: {
        Row: {
          additional_contacts: Json | null
          additional_info: string | null
          advanced_directives_info: string | null
          allergies: string[] | null
          behavioral_notes: string | null
          care_group_id: string
          care_preferences: Json | null
          cognitive_status: string | null
          communication_abilities: string | null
          communication_needs: string | null
          created_at: string | null
          date_of_birth: string | null
          diagnosis: string | null
          dietary_restrictions: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          emergency_contacts: Json | null
          emergency_protocols: string | null
          id: string
          insurance_details: Json | null
          legal_guardian_contact: string | null
          legal_guardian_name: string | null
          medical_conditions: string | null
          medication_allergies: string | null
          medications: string[] | null
          mobility_status: string | null
          name: string
          notes: string | null
          preferences: string | null
          preferences_likes_dislikes: Json | null
          profile_picture_url: string | null
          relationship_to_member: string | null
          routines: string | null
          safety_notes: string | null
          symptoms: string[] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          additional_contacts?: Json | null
          additional_info?: string | null
          advanced_directives_info?: string | null
          allergies?: string[] | null
          behavioral_notes?: string | null
          care_group_id: string
          care_preferences?: Json | null
          cognitive_status?: string | null
          communication_abilities?: string | null
          communication_needs?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          diagnosis?: string | null
          dietary_restrictions?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relationship?: string | null
          emergency_contacts?: Json | null
          emergency_protocols?: string | null
          id?: string
          insurance_details?: Json | null
          legal_guardian_contact?: string | null
          legal_guardian_name?: string | null
          medical_conditions?: string | null
          medication_allergies?: string | null
          medications?: string[] | null
          mobility_status?: string | null
          name: string
          notes?: string | null
          preferences?: string | null
          preferences_likes_dislikes?: Json | null
          profile_picture_url?: string | null
          relationship_to_member?: string | null
          routines?: string | null
          safety_notes?: string | null
          symptoms?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          additional_contacts?: Json | null
          additional_info?: string | null
          advanced_directives_info?: string | null
          allergies?: string[] | null
          behavioral_notes?: string | null
          care_group_id?: string
          care_preferences?: Json | null
          cognitive_status?: string | null
          communication_abilities?: string | null
          communication_needs?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          diagnosis?: string | null
          dietary_restrictions?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relationship?: string | null
          emergency_contacts?: Json | null
          emergency_protocols?: string | null
          id?: string
          insurance_details?: Json | null
          legal_guardian_contact?: string | null
          legal_guardian_name?: string | null
          medical_conditions?: string | null
          medication_allergies?: string | null
          medications?: string[] | null
          mobility_status?: string | null
          name?: string
          notes?: string | null
          preferences?: string | null
          preferences_likes_dislikes?: Json | null
          profile_picture_url?: string | null
          relationship_to_member?: string | null
          routines?: string | null
          safety_notes?: string | null
          symptoms?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      care_request_applications: {
        Row: {
          applicant_profile_id: string
          cover_letter: string | null
          created_at: string
          id: string
          proposed_rate: number | null
          request_id: string
          status: string
          updated_at: string
        }
        Insert: {
          applicant_profile_id: string
          cover_letter?: string | null
          created_at?: string
          id?: string
          proposed_rate?: number | null
          request_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          applicant_profile_id?: string
          cover_letter?: string | null
          created_at?: string
          id?: string
          proposed_rate?: number | null
          request_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_request_applications_applicant_profile_id_fkey"
            columns: ["applicant_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_request_applications_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "care_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      care_requests: {
        Row: {
          care_group_id: string | null
          care_type: string
          compensation_amount: number | null
          compensation_type: string | null
          created_at: string
          description: string
          end_time: string | null
          id: string
          is_recurring: boolean | null
          latitude: number | null
          location: string | null
          longitude: number | null
          posted_by_user_id: string
          recurrence_pattern: string | null
          service_type: string | null
          start_time: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          care_group_id?: string | null
          care_type: string
          compensation_amount?: number | null
          compensation_type?: string | null
          created_at?: string
          description: string
          end_time?: string | null
          id?: string
          is_recurring?: boolean | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          posted_by_user_id: string
          recurrence_pattern?: string | null
          service_type?: string | null
          start_time: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          care_group_id?: string | null
          care_type?: string
          compensation_amount?: number | null
          compensation_type?: string | null
          created_at?: string
          description?: string
          end_time?: string | null
          id?: string
          is_recurring?: boolean | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          posted_by_user_id?: string
          recurrence_pattern?: string | null
          service_type?: string | null
          start_time?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_requests_posted_by_user_id_fkey"
            columns: ["posted_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      carecheckiner_profiles: {
        Row: {
          availability: Json | null
          avatar_url: string | null
          average_rating: number | null
          bio: string | null
          certifications: string[] | null
          checkin_types_offered: string[]
          created_at: string | null
          experience_years: number | null
          full_name: string | null
          hourly_rate: number | null
          id: string
          is_verified: boolean | null
          languages_spoken: string[] | null
          service_areas: string[] | null
          total_reviews: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          availability?: Json | null
          avatar_url?: string | null
          average_rating?: number | null
          bio?: string | null
          certifications?: string[] | null
          checkin_types_offered: string[]
          created_at?: string | null
          experience_years?: number | null
          full_name?: string | null
          hourly_rate?: number | null
          id?: string
          is_verified?: boolean | null
          languages_spoken?: string[] | null
          service_areas?: string[] | null
          total_reviews?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          availability?: Json | null
          avatar_url?: string | null
          average_rating?: number | null
          bio?: string | null
          certifications?: string[] | null
          checkin_types_offered?: string[]
          created_at?: string | null
          experience_years?: number | null
          full_name?: string | null
          hourly_rate?: number | null
          id?: string
          is_verified?: boolean | null
          languages_spoken?: string[] | null
          service_areas?: string[] | null
          total_reviews?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      carecheckiner_reviews: {
        Row: {
          booking_id: string | null
          carecheckiner_id: string
          comment: string | null
          created_at: string | null
          id: string
          rating: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          booking_id?: string | null
          carecheckiner_id: string
          comment?: string | null
          created_at?: string | null
          id?: string
          rating: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          booking_id?: string | null
          carecheckiner_id?: string
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "carecheckiner_reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "care_checkin_bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "carecheckiner_reviews_carecheckiner_id_fkey"
            columns: ["carecheckiner_id"]
            isOneToOne: false
            referencedRelation: "carecheckiner_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cared_persons: {
        Row: {
          contact_information: Json | null
          created_at: string | null
          date_of_birth: string | null
          emergency_contacts: Json | null
          id: string
          medical_conditions: string | null
          medication_summary: string | null
          name: string
          notes: string | null
          profile_picture_url: string | null
          relationship_to_user: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          contact_information?: Json | null
          created_at?: string | null
          date_of_birth?: string | null
          emergency_contacts?: Json | null
          id?: string
          medical_conditions?: string | null
          medication_summary?: string | null
          name: string
          notes?: string | null
          profile_picture_url?: string | null
          relationship_to_user?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          contact_information?: Json | null
          created_at?: string | null
          date_of_birth?: string | null
          emergency_contacts?: Json | null
          id?: string
          medical_conditions?: string | null
          medication_summary?: string | null
          name?: string
          notes?: string | null
          profile_picture_url?: string | null
          relationship_to_user?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      checkin_history: {
        Row: {
          booking_id: string
          checkin_timestamp: string | null
          created_at: string | null
          details: Json | null
          id: string
          outcome_summary: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          booking_id: string
          checkin_timestamp?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          outcome_summary?: string | null
          status: string
          updated_at?: string | null
        }
        Update: {
          booking_id?: string
          checkin_timestamp?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          outcome_summary?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "checkin_history_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "care_checkin_bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      checkin_logs: {
        Row: {
          checkin_schedule_id: string
          created_at: string
          details_payload: Json | null
          duration_minutes: number | null
          id: string
          notes: string | null
          performed_at: string | null
          status: Database["public"]["Enums"]["checkin_log_status"]
          summary: string | null
          updated_at: string
        }
        Insert: {
          checkin_schedule_id: string
          created_at?: string
          details_payload?: Json | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          performed_at?: string | null
          status?: Database["public"]["Enums"]["checkin_log_status"]
          summary?: string | null
          updated_at?: string
        }
        Update: {
          checkin_schedule_id?: string
          created_at?: string
          details_payload?: Json | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          performed_at?: string | null
          status?: Database["public"]["Enums"]["checkin_log_status"]
          summary?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "checkin_logs_checkin_schedule_id_fkey"
            columns: ["checkin_schedule_id"]
            isOneToOne: false
            referencedRelation: "checkin_schedules"
            referencedColumns: ["id"]
          },
        ]
      }
      checkin_person_services: {
        Row: {
          created_at: string
          custom_rate_per_service: number | null
          id: string
          is_active: boolean
          profile_id: string
          service_type_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          custom_rate_per_service?: number | null
          id?: string
          is_active?: boolean
          profile_id: string
          service_type_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          custom_rate_per_service?: number | null
          id?: string
          is_active?: boolean
          profile_id?: string
          service_type_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "checkin_person_services_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checkin_person_services_service_type_id_fkey"
            columns: ["service_type_id"]
            isOneToOne: false
            referencedRelation: "checkin_service_types"
            referencedColumns: ["id"]
          },
        ]
      }
      checkin_schedules: {
        Row: {
          assigned_checkin_person_id: string | null
          care_group_id: string
          care_recipient_id: string
          checkin_service_type_id: string
          created_at: string
          created_by_id: string
          custom_instructions: string | null
          end_datetime: string | null
          frequency: Database["public"]["Enums"]["checkin_frequency"] | null
          frequency_details: Json | null
          id: string
          last_occurrence_at: string | null
          next_occurrence_at: string | null
          start_datetime: string
          status: Database["public"]["Enums"]["checkin_schedule_status"]
          updated_at: string
        }
        Insert: {
          assigned_checkin_person_id?: string | null
          care_group_id: string
          care_recipient_id: string
          checkin_service_type_id: string
          created_at?: string
          created_by_id: string
          custom_instructions?: string | null
          end_datetime?: string | null
          frequency?: Database["public"]["Enums"]["checkin_frequency"] | null
          frequency_details?: Json | null
          id?: string
          last_occurrence_at?: string | null
          next_occurrence_at?: string | null
          start_datetime: string
          status?: Database["public"]["Enums"]["checkin_schedule_status"]
          updated_at?: string
        }
        Update: {
          assigned_checkin_person_id?: string | null
          care_group_id?: string
          care_recipient_id?: string
          checkin_service_type_id?: string
          created_at?: string
          created_by_id?: string
          custom_instructions?: string | null
          end_datetime?: string | null
          frequency?: Database["public"]["Enums"]["checkin_frequency"] | null
          frequency_details?: Json | null
          id?: string
          last_occurrence_at?: string | null
          next_occurrence_at?: string | null
          start_datetime?: string
          status?: Database["public"]["Enums"]["checkin_schedule_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "checkin_schedules_assigned_checkin_person_id_fkey"
            columns: ["assigned_checkin_person_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checkin_schedules_care_recipient_id_fkey"
            columns: ["care_recipient_id"]
            isOneToOne: false
            referencedRelation: "care_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checkin_schedules_checkin_service_type_id_fkey"
            columns: ["checkin_service_type_id"]
            isOneToOne: false
            referencedRelation: "checkin_service_types"
            referencedColumns: ["id"]
          },
        ]
      }
      checkin_service_types: {
        Row: {
          created_at: string
          default_duration_minutes: number | null
          description: string | null
          id: string
          is_self_service: boolean | null
          method: Database["public"]["Enums"]["checkin_method"]
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          default_duration_minutes?: number | null
          description?: string | null
          id?: string
          is_self_service?: boolean | null
          method?: Database["public"]["Enums"]["checkin_method"]
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          default_duration_minutes?: number | null
          description?: string | null
          id?: string
          is_self_service?: boolean | null
          method?: Database["public"]["Enums"]["checkin_method"]
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      checkiner_bookings: {
        Row: {
          booking_time: string
          cancellation_reason: string | null
          cancellation_time: string | null
          cancelled_by_user_id: string | null
          care_group_id: string | null
          care_recipient_id: string | null
          checkin_type: Database["public"]["Enums"]["checkin_booking_type"]
          checkiner_id: string
          cost: number | null
          created_at: string
          currency: string | null
          duration_minutes: number | null
          id: string
          notes_for_professional: string | null
          professional_response_notes: string | null
          requester_user_id: string
          rescheduled_from_booking_id: string | null
          status: Database["public"]["Enums"]["checkin_booking_status"]
          updated_at: string
        }
        Insert: {
          booking_time: string
          cancellation_reason?: string | null
          cancellation_time?: string | null
          cancelled_by_user_id?: string | null
          care_group_id?: string | null
          care_recipient_id?: string | null
          checkin_type: Database["public"]["Enums"]["checkin_booking_type"]
          checkiner_id: string
          cost?: number | null
          created_at?: string
          currency?: string | null
          duration_minutes?: number | null
          id?: string
          notes_for_professional?: string | null
          professional_response_notes?: string | null
          requester_user_id: string
          rescheduled_from_booking_id?: string | null
          status?: Database["public"]["Enums"]["checkin_booking_status"]
          updated_at?: string
        }
        Update: {
          booking_time?: string
          cancellation_reason?: string | null
          cancellation_time?: string | null
          cancelled_by_user_id?: string | null
          care_group_id?: string | null
          care_recipient_id?: string | null
          checkin_type?: Database["public"]["Enums"]["checkin_booking_type"]
          checkiner_id?: string
          cost?: number | null
          created_at?: string
          currency?: string | null
          duration_minutes?: number | null
          id?: string
          notes_for_professional?: string | null
          professional_response_notes?: string | null
          requester_user_id?: string
          rescheduled_from_booking_id?: string | null
          status?: Database["public"]["Enums"]["checkin_booking_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "checkin_professional_bookings_rescheduled_from_booking_id_fkey"
            columns: ["rescheduled_from_booking_id"]
            isOneToOne: false
            referencedRelation: "checkiner_bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      claimed_rewards: {
        Row: {
          claimed_at: string
          id: string
          points_redeemed: number
          reward_id: string
          status: string
          user_id: string
        }
        Insert: {
          claimed_at?: string
          id?: string
          points_redeemed?: number
          reward_id: string
          status?: string
          user_id: string
        }
        Update: {
          claimed_at?: string
          id?: string
          points_redeemed?: number
          reward_id?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "claimed_rewards_reward_id_fkey"
            columns: ["reward_id"]
            isOneToOne: false
            referencedRelation: "rewards"
            referencedColumns: ["id"]
          },
        ]
      }
      community_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          parent_comment_id: string | null
          post_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          post_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "community_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_posts: {
        Row: {
          comments: number | null
          content: string
          created_at: string | null
          id: string
          likes: number | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          comments?: number | null
          content: string
          created_at?: string | null
          id?: string
          likes?: number | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          comments?: number | null
          content?: string
          created_at?: string | null
          id?: string
          likes?: number | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      companion_availability: {
        Row: {
          companion_id: string
          created_at: string
          day_of_week: number
          end_time: string
          id: string
          is_recurring: boolean | null
          notes: string | null
          specific_date: string | null
          start_time: string
          updated_at: string
        }
        Insert: {
          companion_id: string
          created_at?: string
          day_of_week: number
          end_time: string
          id?: string
          is_recurring?: boolean | null
          notes?: string | null
          specific_date?: string | null
          start_time: string
          updated_at?: string
        }
        Update: {
          companion_id?: string
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: string
          is_recurring?: boolean | null
          notes?: string | null
          specific_date?: string | null
          start_time?: string
          updated_at?: string
        }
        Relationships: []
      }
      companion_bookings: {
        Row: {
          booking_time_end: string
          booking_time_start: string
          cancellation_reason: string | null
          care_group_id: string | null
          care_recipient_id: string | null
          care_request_id: string | null
          companion_id: string
          created_at: string
          id: string
          notes_for_companion: string | null
          notes_for_user: string | null
          payment_status: string | null
          service_type: string | null
          status: Database["public"]["Enums"]["booking_status_companion"] | null
          total_cost: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          booking_time_end: string
          booking_time_start: string
          cancellation_reason?: string | null
          care_group_id?: string | null
          care_recipient_id?: string | null
          care_request_id?: string | null
          companion_id: string
          created_at?: string
          id?: string
          notes_for_companion?: string | null
          notes_for_user?: string | null
          payment_status?: string | null
          service_type?: string | null
          status?:
            | Database["public"]["Enums"]["booking_status_companion"]
            | null
          total_cost?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          booking_time_end?: string
          booking_time_start?: string
          cancellation_reason?: string | null
          care_group_id?: string | null
          care_recipient_id?: string | null
          care_request_id?: string | null
          companion_id?: string
          created_at?: string
          id?: string
          notes_for_companion?: string | null
          notes_for_user?: string | null
          payment_status?: string | null
          service_type?: string | null
          status?:
            | Database["public"]["Enums"]["booking_status_companion"]
            | null
          total_cost?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "companion_bookings_care_recipient_id_fkey"
            columns: ["care_recipient_id"]
            isOneToOne: false
            referencedRelation: "care_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "companion_bookings_care_request_id_fkey"
            columns: ["care_request_id"]
            isOneToOne: false
            referencedRelation: "care_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      conversation_messages: {
        Row: {
          attachment_name: string | null
          attachment_url: string | null
          content: string
          conversation_id: string
          created_at: string
          id: string
          is_read: boolean | null
          sender_id: string
          user_id: string | null
        }
        Insert: {
          attachment_name?: string | null
          attachment_url?: string | null
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          sender_id: string
          user_id?: string | null
        }
        Update: {
          attachment_name?: string | null
          attachment_url?: string | null
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          sender_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversation_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      conversation_participants: {
        Row: {
          conversation_id: string
          user_id: string
        }
        Insert: {
          conversation_id: string
          user_id: string
        }
        Update: {
          conversation_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversation_participants_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          created_at: string
          id: string
        }
        Insert: {
          created_at?: string
          id?: string
        }
        Update: {
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      coping_strategies: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          strategy_type: string | null
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          strategy_type?: string | null
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          strategy_type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      craving_logs: {
        Row: {
          coping_mechanism: string | null
          coping_strategy_id: string | null
          created_at: string | null
          id: string
          intensity: number
          timestamp: string
          trigger: string | null
          trigger_id: string | null
          user_id: string | null
        }
        Insert: {
          coping_mechanism?: string | null
          coping_strategy_id?: string | null
          created_at?: string | null
          id?: string
          intensity: number
          timestamp?: string
          trigger?: string | null
          trigger_id?: string | null
          user_id?: string | null
        }
        Update: {
          coping_mechanism?: string | null
          coping_strategy_id?: string | null
          created_at?: string | null
          id?: string
          intensity?: number
          timestamp?: string
          trigger?: string | null
          trigger_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "craving_logs_coping_strategy_id_fkey"
            columns: ["coping_strategy_id"]
            isOneToOne: false
            referencedRelation: "coping_strategies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "craving_logs_trigger_id_fkey"
            columns: ["trigger_id"]
            isOneToOne: false
            referencedRelation: "triggers"
            referencedColumns: ["id"]
          },
        ]
      }
      custom_products: {
        Row: {
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      daily_planner_items: {
        Row: {
          created_at: string
          date: string
          description: string | null
          end_time: string | null
          event_id: string | null
          id: string
          is_completed: boolean
          start_time: string | null
          task_id: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          description?: string | null
          end_time?: string | null
          event_id?: string | null
          id?: string
          is_completed?: boolean
          start_time?: string | null
          task_id?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string | null
          end_time?: string | null
          event_id?: string | null
          id?: string
          is_completed?: boolean
          start_time?: string | null
          task_id?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      daily_plans: {
        Row: {
          created_at: string
          date: string
          id: string
          routine_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          routine_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          routine_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "daily_plans_routine_id_fkey"
            columns: ["routine_id"]
            isOneToOne: false
            referencedRelation: "routines"
            referencedColumns: ["id"]
          },
        ]
      }
      deprecated_nicotine_logs: {
        Row: {
          coping_mechanism: string | null
          craving_intensity: number
          craving_trigger: string | null
          created_at: string
          date: string
          energy: number
          focus: number
          id: string
          journal: string | null
          mood: number
          nicotine_entries_data: Json | null
          product_type: string | null
          quantity: number | null
          sleep_hours: number
          sleep_quality: number
          used_nicotine: boolean
          user_id: string
        }
        Insert: {
          coping_mechanism?: string | null
          craving_intensity: number
          craving_trigger?: string | null
          created_at?: string
          date: string
          energy: number
          focus: number
          id?: string
          journal?: string | null
          mood: number
          nicotine_entries_data?: Json | null
          product_type?: string | null
          quantity?: number | null
          sleep_hours: number
          sleep_quality: number
          used_nicotine: boolean
          user_id: string
        }
        Update: {
          coping_mechanism?: string | null
          craving_intensity?: number
          craving_trigger?: string | null
          created_at?: string
          date?: string
          energy?: number
          focus?: number
          id?: string
          journal?: string | null
          mood?: number
          nicotine_entries_data?: Json | null
          product_type?: string | null
          quantity?: number | null
          sleep_hours?: number
          sleep_quality?: number
          used_nicotine?: boolean
          user_id?: string
        }
        Relationships: []
      }
      deprecated_nicotine_product_costs: {
        Row: {
          cost_per_unit: number
          created_at: string
          id: string
          product_type: string
          unit_name: string
          user_id: string
        }
        Insert: {
          cost_per_unit: number
          created_at?: string
          id?: string
          product_type: string
          unit_name: string
          user_id: string
        }
        Update: {
          cost_per_unit?: number
          created_at?: string
          id?: string
          product_type?: string
          unit_name?: string
          user_id?: string
        }
        Relationships: []
      }
      deprecated_smokeless_products: {
        Row: {
          average_rating: number | null
          brand: string
          chemical_of_concern: Json | null
          created_at: string | null
          description: string
          flavor: string
          gum_health_guide: string | null
          gum_health_rating: number | null
          id: string
          image_url: string | null
          name: string
          nicotine_strength: number
          price_range: string
          review_count: number | null
          updated_at: string | null
          vendor_id: string
        }
        Insert: {
          average_rating?: number | null
          brand: string
          chemical_of_concern?: Json | null
          created_at?: string | null
          description: string
          flavor: string
          gum_health_guide?: string | null
          gum_health_rating?: number | null
          id?: string
          image_url?: string | null
          name: string
          nicotine_strength: number
          price_range: string
          review_count?: number | null
          updated_at?: string | null
          vendor_id: string
        }
        Update: {
          average_rating?: number | null
          brand?: string
          chemical_of_concern?: Json | null
          created_at?: string | null
          description?: string
          flavor?: string
          gum_health_guide?: string | null
          gum_health_rating?: number | null
          id?: string
          image_url?: string | null
          name?: string
          nicotine_strength?: number
          price_range?: string
          review_count?: number | null
          updated_at?: string | null
          vendor_id?: string
        }
        Relationships: []
      }
      direct_messages: {
        Row: {
          attachments: Json | null
          created_at: string
          id: string
          message_content: string
          read_at: string | null
          receiver_id: string
          sender_id: string
          updated_at: string
        }
        Insert: {
          attachments?: Json | null
          created_at?: string
          id?: string
          message_content: string
          read_at?: string | null
          receiver_id: string
          sender_id: string
          updated_at?: string
        }
        Update: {
          attachments?: Json | null
          created_at?: string
          id?: string
          message_content?: string
          read_at?: string | null
          receiver_id?: string
          sender_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      drawing_notes: {
        Row: {
          created_at: string
          drawing_data: Json | null
          id: string
          team_id: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          drawing_data?: Json | null
          id?: string
          team_id?: string | null
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          drawing_data?: Json | null
          id?: string
          team_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "drawing_notes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      energy_plans: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      exercise_logs: {
        Row: {
          activity_type: string
          calories_burned: number | null
          duration_minutes: number | null
          exercise_type: string
          id: string
          intensity: string | null
          timestamp: string
          user_id: string
        }
        Insert: {
          activity_type: string
          calories_burned?: number | null
          duration_minutes?: number | null
          exercise_type: string
          id?: string
          intensity?: string | null
          timestamp?: string
          user_id: string
        }
        Update: {
          activity_type?: string
          calories_burned?: number | null
          duration_minutes?: number | null
          exercise_type?: string
          id?: string
          intensity?: string | null
          timestamp?: string
          user_id?: string
        }
        Relationships: []
      }
      exercise_routines: {
        Row: {
          created_at: string
          exercises: Json
          id: string
          name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          exercises?: Json
          id?: string
          name: string
          user_id: string
        }
        Update: {
          created_at?: string
          exercises?: Json
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_control_achievement_definitions: {
        Row: {
          category: string
          created_at: string
          criteria: Json | null
          description: string
          icon_name: string | null
          id: string
          is_active: boolean
          points: number
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          criteria?: Json | null
          description: string
          icon_name?: string | null
          id: string
          is_active?: boolean
          points?: number
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          criteria?: Json | null
          description?: string
          icon_name?: string | null
          id?: string
          is_active?: boolean
          points?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      fella_control_activity_points_log: {
        Row: {
          activity_id: string | null
          activity_name: string | null
          activity_type: string
          created_at: string
          id: string
          points_earned: number
          user_id: string
        }
        Insert: {
          activity_id?: string | null
          activity_name?: string | null
          activity_type: string
          created_at?: string
          id?: string
          points_earned: number
          user_id: string
        }
        Update: {
          activity_id?: string | null
          activity_name?: string | null
          activity_type?: string
          created_at?: string
          id?: string
          points_earned?: number
          user_id?: string
        }
        Relationships: []
      }
      fella_control_alcohol_logs: {
        Row: {
          craving_intensity: number | null
          craving_trigger: string | null
          created_at: string
          date: string
          drink_entries_data: Json | null
          energy: number | null
          energy_level: number | null
          focus: number | null
          focus_level: number | null
          id: string
          journal_summary: string | null
          mood: number | null
          mood_notes: string | null
          sleep_hours: number | null
          sleep_quality: number | null
          stress_level: number | null
          used_alcohol: boolean
          user_id: string
        }
        Insert: {
          craving_intensity?: number | null
          craving_trigger?: string | null
          created_at?: string
          date: string
          drink_entries_data?: Json | null
          energy?: number | null
          energy_level?: number | null
          focus?: number | null
          focus_level?: number | null
          id?: string
          journal_summary?: string | null
          mood?: number | null
          mood_notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          used_alcohol: boolean
          user_id: string
        }
        Update: {
          craving_intensity?: number | null
          craving_trigger?: string | null
          created_at?: string
          date?: string
          drink_entries_data?: Json | null
          energy?: number | null
          energy_level?: number | null
          focus?: number | null
          focus_level?: number | null
          id?: string
          journal_summary?: string | null
          mood?: number | null
          mood_notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          used_alcohol?: boolean
          user_id?: string
        }
        Relationships: []
      }
      fella_control_badges: {
        Row: {
          category: string | null
          created_at: string
          criteria: Json | null
          description: string
          id: string
          image_url: string | null
          name: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          criteria?: Json | null
          description: string
          id: string
          image_url?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          criteria?: Json | null
          description?: string
          id?: string
          image_url?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      fella_control_claimed_rewards: {
        Row: {
          claimed_at: string
          created_at: string
          id: string
          notes: string | null
          points_redeemed: number
          reward_id: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          claimed_at?: string
          created_at?: string
          id?: string
          notes?: string | null
          points_redeemed: number
          reward_id?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          claimed_at?: string
          created_at?: string
          id?: string
          notes?: string | null
          points_redeemed?: number
          reward_id?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_control_claimed_rewards_reward_id_fkey"
            columns: ["reward_id"]
            isOneToOne: false
            referencedRelation: "fella_control_rewards"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_control_community_posts: {
        Row: {
          content: string
          created_at: string
          id: string
          is_deleted: boolean
          parent_post_id: string | null
          title: string
          topic_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_deleted?: boolean
          parent_post_id?: string | null
          title: string
          topic_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_deleted?: boolean
          parent_post_id?: string | null
          title?: string
          topic_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_control_community_posts_parent_post_id_fkey"
            columns: ["parent_post_id"]
            isOneToOne: false
            referencedRelation: "fella_control_community_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_control_community_posts_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "fella_control_community_topics"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_control_community_topics: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      fella_control_coping_strategies: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      fella_control_craving_logs: {
        Row: {
          coping_strategy_id: string | null
          coping_strategy_used: string | null
          created_at: string
          duration_minutes: number | null
          id: string
          intensity: number
          location: string | null
          notes: string | null
          timestamp: string
          trigger_description: string | null
          trigger_id: string | null
          user_id: string
        }
        Insert: {
          coping_strategy_id?: string | null
          coping_strategy_used?: string | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          intensity: number
          location?: string | null
          notes?: string | null
          timestamp?: string
          trigger_description?: string | null
          trigger_id?: string | null
          user_id: string
        }
        Update: {
          coping_strategy_id?: string | null
          coping_strategy_used?: string | null
          created_at?: string
          duration_minutes?: number | null
          id?: string
          intensity?: number
          location?: string | null
          notes?: string | null
          timestamp?: string
          trigger_description?: string | null
          trigger_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      fella_control_drink_logs: {
        Row: {
          created_at: string
          date: string
          drink_type: string
          id: string
          notes: string | null
          units: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          drink_type: string
          id?: string
          notes?: string | null
          units: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          drink_type?: string
          id?: string
          notes?: string | null
          units?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_control_health_metrics: {
        Row: {
          created_at: string
          date: string
          energy_level: number | null
          focus_level: number | null
          id: string
          mood: number | null
          notes: string | null
          sleep_hours: number | null
          sleep_quality: number | null
          stress_level: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          energy_level?: number | null
          focus_level?: number | null
          id?: string
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          energy_level?: number | null
          focus_level?: number | null
          id?: string
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_control_journal_entries: {
        Row: {
          content: string
          created_at: string
          id: string
          mood_rating: number | null
          tags: Json | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          mood_rating?: number | null
          tags?: Json | null
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          mood_rating?: number | null
          tags?: Json | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_control_notification_preferences: {
        Row: {
          badge_unlock_notifications: boolean | null
          community_notifications: boolean | null
          created_at: string | null
          fella_chat_notifications: boolean | null
          id: string
          milestone_notifications: boolean | null
          motivational_quote_notifications: boolean | null
          reminder_notifications: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          badge_unlock_notifications?: boolean | null
          community_notifications?: boolean | null
          created_at?: string | null
          fella_chat_notifications?: boolean | null
          id?: string
          milestone_notifications?: boolean | null
          motivational_quote_notifications?: boolean | null
          reminder_notifications?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          badge_unlock_notifications?: boolean | null
          community_notifications?: boolean | null
          created_at?: string | null
          fella_chat_notifications?: boolean | null
          id?: string
          milestone_notifications?: boolean | null
          motivational_quote_notifications?: boolean | null
          reminder_notifications?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      fella_control_post_likes: {
        Row: {
          created_at: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_control_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "fella_control_community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_control_push_tokens: {
        Row: {
          created_at: string | null
          id: string
          platform: string | null
          token: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          platform?: string | null
          token: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          platform?: string | null
          token?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_control_quotes: {
        Row: {
          author: string | null
          created_at: string
          id: number
          quote_text: string
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: number
          quote_text: string
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: number
          quote_text?: string
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      fella_control_reply_likes: {
        Row: {
          created_at: string
          id: string
          reply_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          reply_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          reply_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_control_reply_likes_reply_id_fkey"
            columns: ["reply_id"]
            isOneToOne: false
            referencedRelation: "fella_control_community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_control_rewards: {
        Row: {
          active: boolean
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          points_required: number
          reward_category: string | null
          unlock_condition: Json | null
        }
        Insert: {
          active?: boolean
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          points_required?: number
          reward_category?: string | null
          unlock_condition?: Json | null
        }
        Update: {
          active?: boolean
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          points_required?: number
          reward_category?: string | null
          unlock_condition?: Json | null
        }
        Relationships: []
      }
      fella_control_step_rewards: {
        Row: {
          created_at: string
          date: string
          id: string
          points_earned: number
          steps: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          points_earned: number
          steps: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          points_earned?: number
          steps?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_control_success_stories: {
        Row: {
          created_at: string
          id: string
          is_anonymous: boolean
          story_content: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_anonymous?: boolean
          story_content: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_anonymous?: boolean
          story_content?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_control_success_story_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          is_deleted: boolean
          parent_comment_id: string | null
          story_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_deleted?: boolean
          parent_comment_id?: string | null
          story_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_deleted?: boolean
          parent_comment_id?: string | null
          story_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_control_success_story_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "fella_control_success_story_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_control_success_story_comments_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "fella_control_success_stories"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_control_success_story_likes: {
        Row: {
          created_at: string
          story_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          story_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          story_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_control_success_story_likes_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "fella_control_success_stories"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_control_triggers: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      fella_control_user_achievements: {
        Row: {
          achieved_at: string
          achievement_id: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          achieved_at?: string
          achievement_id: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          achieved_at?: string
          achievement_id?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_control_user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "fella_control_achievement_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_control_user_badges: {
        Row: {
          badge_id: string
          created_at: string
          earned_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          badge_id: string
          created_at?: string
          earned_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          badge_id?: string
          created_at?: string
          earned_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_control_user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "fella_control_badges"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_control_user_gamification_stats: {
        Row: {
          created_at: string
          current_level: number
          current_points: number
          current_streak: number
          last_streak_check_date: string | null
          last_streak_updated_at: string | null
          longest_streak: number
          tool_usage_count: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_level?: number
          current_points?: number
          current_streak?: number
          last_streak_check_date?: string | null
          last_streak_updated_at?: string | null
          longest_streak?: number
          tool_usage_count?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_level?: number
          current_points?: number
          current_streak?: number
          last_streak_check_date?: string | null
          last_streak_updated_at?: string | null
          longest_streak?: number
          tool_usage_count?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_control_user_goals: {
        Row: {
          created_at: string
          daily_step_goal: number | null
          fella_control_cost_per_drink: number | null
          fella_control_product_type: string | null
          fella_control_reduction_target_percent: number | null
          fella_control_typical_daily_drinks: number | null
          goal_type: string
          id: string
          method: string | null
          method_details: Json | null
          moderation_start_date: string | null
          motivation: string | null
          quit_date: string | null
          status: string | null
          timeline_days: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          daily_step_goal?: number | null
          fella_control_cost_per_drink?: number | null
          fella_control_product_type?: string | null
          fella_control_reduction_target_percent?: number | null
          fella_control_typical_daily_drinks?: number | null
          goal_type: string
          id?: string
          method?: string | null
          method_details?: Json | null
          moderation_start_date?: string | null
          motivation?: string | null
          quit_date?: string | null
          status?: string | null
          timeline_days?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          daily_step_goal?: number | null
          fella_control_cost_per_drink?: number | null
          fella_control_product_type?: string | null
          fella_control_reduction_target_percent?: number | null
          fella_control_typical_daily_drinks?: number | null
          goal_type?: string
          id?: string
          method?: string | null
          method_details?: Json | null
          moderation_start_date?: string | null
          motivation?: string | null
          quit_date?: string | null
          status?: string | null
          timeline_days?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_control_user_trigger_strategy_map: {
        Row: {
          created_at: string | null
          id: string
          strategy_id: string
          trigger_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          strategy_id: string
          trigger_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          strategy_id?: string
          trigger_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_control_user_trigger_strategy_map_strategy_id_fkey"
            columns: ["strategy_id"]
            isOneToOne: false
            referencedRelation: "fella_control_coping_strategies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_control_user_trigger_strategy_map_trigger_id_fkey"
            columns: ["trigger_id"]
            isOneToOne: false
            referencedRelation: "fella_control_triggers"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_fresh_activity_logs: {
        Row: {
          activity_type: string
          calories_burned: number | null
          created_at: string
          duration_minutes: number
          id: string
          intensity: number | null
          notes: string | null
          timestamp: string
          user_id: string | null
        }
        Insert: {
          activity_type: string
          calories_burned?: number | null
          created_at?: string
          duration_minutes: number
          id?: string
          intensity?: number | null
          notes?: string | null
          timestamp?: string
          user_id?: string | null
        }
        Update: {
          activity_type?: string
          calories_burned?: number | null
          created_at?: string
          duration_minutes?: number
          id?: string
          intensity?: number | null
          notes?: string | null
          timestamp?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_fresh_community_posts: {
        Row: {
          content: string
          created_at: string
          id: string
          is_deleted: boolean
          parent_post_id: string | null
          title: string | null
          topic_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_deleted?: boolean
          parent_post_id?: string | null
          title?: string | null
          topic_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_deleted?: boolean
          parent_post_id?: string | null
          title?: string | null
          topic_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_fresh_community_posts_parent_post_id_fkey"
            columns: ["parent_post_id"]
            isOneToOne: false
            referencedRelation: "fella_fresh_community_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_fresh_community_posts_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "fella_fresh_community_topics"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_fresh_community_topics: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      fella_fresh_coping_mechanism_logs: {
        Row: {
          created_at: string
          duration_minutes: number | null
          effectiveness_rating: number | null
          id: string
          mechanism_used: string
          notes: string | null
          timestamp: string
          trigger_event: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          duration_minutes?: number | null
          effectiveness_rating?: number | null
          id?: string
          mechanism_used: string
          notes?: string | null
          timestamp?: string
          trigger_event?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          duration_minutes?: number | null
          effectiveness_rating?: number | null
          id?: string
          mechanism_used?: string
          notes?: string | null
          timestamp?: string
          trigger_event?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_fresh_craving_logs: {
        Row: {
          coping_mechanism: string | null
          coping_strategy_id: string | null
          created_at: string
          id: string
          intensity: number
          timestamp: string
          trigger: string | null
          trigger_id: string | null
          user_id: string | null
        }
        Insert: {
          coping_mechanism?: string | null
          coping_strategy_id?: string | null
          created_at?: string
          id?: string
          intensity: number
          timestamp?: string
          trigger?: string | null
          trigger_id?: string | null
          user_id?: string | null
        }
        Update: {
          coping_mechanism?: string | null
          coping_strategy_id?: string | null
          created_at?: string
          id?: string
          intensity?: number
          timestamp?: string
          trigger?: string | null
          trigger_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fella_fresh_craving_logs_coping_strategy_id_fkey"
            columns: ["coping_strategy_id"]
            isOneToOne: false
            referencedRelation: "coping_strategies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_fresh_craving_logs_trigger_id_fkey"
            columns: ["trigger_id"]
            isOneToOne: false
            referencedRelation: "triggers"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_fresh_educational_content_progress: {
        Row: {
          completed_at: string | null
          content_id: string
          content_type: string
          created_at: string
          id: string
          last_accessed_at: string
          notes: string | null
          progress_percentage: number | null
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          content_id: string
          content_type: string
          created_at?: string
          id?: string
          last_accessed_at?: string
          notes?: string | null
          progress_percentage?: number | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          content_id?: string
          content_type?: string
          created_at?: string
          id?: string
          last_accessed_at?: string
          notes?: string | null
          progress_percentage?: number | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_fresh_gratitude_journal_entries: {
        Row: {
          created_at: string
          entry_date: string
          entry_text: string
          id: string
          tags: string[] | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          entry_date: string
          entry_text: string
          id?: string
          tags?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          entry_date?: string
          entry_text?: string
          id?: string
          tags?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_fresh_health_metrics: {
        Row: {
          created_at: string
          date: string
          emotion_tags: string[] | null
          energy_level: number | null
          factors: string[] | null
          focus_level: number | null
          id: string
          meditation_minutes: number | null
          mood: number | null
          notes: string | null
          sleep_hours: number | null
          sleep_quality: number | null
          stress_level: number | null
          symptoms: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          emotion_tags?: string[] | null
          energy_level?: number | null
          factors?: string[] | null
          focus_level?: number | null
          id?: string
          meditation_minutes?: number | null
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          symptoms?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          emotion_tags?: string[] | null
          energy_level?: number | null
          factors?: string[] | null
          focus_level?: number | null
          id?: string
          meditation_minutes?: number | null
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          symptoms?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_fresh_hydration_logs: {
        Row: {
          created_at: string
          date: string
          id: string
          notes: string | null
          user_id: string | null
          water_intake_ml: number
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          notes?: string | null
          user_id?: string | null
          water_intake_ml: number
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          notes?: string | null
          user_id?: string | null
          water_intake_ml?: number
        }
        Relationships: []
      }
      fella_fresh_meditation_logs: {
        Row: {
          created_at: string
          duration_minutes: number
          id: string
          meditation_type: string | null
          notes: string | null
          timestamp: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          duration_minutes: number
          id?: string
          meditation_type?: string | null
          notes?: string | null
          timestamp?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          duration_minutes?: number
          id?: string
          meditation_type?: string | null
          notes?: string | null
          timestamp?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_fresh_mood_logs: {
        Row: {
          created_at: string
          id: string
          mood_rating: number
          notes: string | null
          timestamp: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          mood_rating: number
          notes?: string | null
          timestamp?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          mood_rating?: number
          notes?: string | null
          timestamp?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_fresh_nicotine_logs: {
        Row: {
          coping_strategy_id: string | null
          craving_intensity: number | null
          craving_trigger_id: string | null
          created_at: string
          custom_coping_strategy_description: string | null
          custom_product_name: string | null
          custom_trigger_description: string | null
          id: string
          logged_at: string
          mood_after: number | null
          mood_before: number | null
          notes: string | null
          product_type: string | null
          quantity: number | null
          unit: string | null
          user_id: string
        }
        Insert: {
          coping_strategy_id?: string | null
          craving_intensity?: number | null
          craving_trigger_id?: string | null
          created_at?: string
          custom_coping_strategy_description?: string | null
          custom_product_name?: string | null
          custom_trigger_description?: string | null
          id?: string
          logged_at?: string
          mood_after?: number | null
          mood_before?: number | null
          notes?: string | null
          product_type?: string | null
          quantity?: number | null
          unit?: string | null
          user_id: string
        }
        Update: {
          coping_strategy_id?: string | null
          craving_intensity?: number | null
          craving_trigger_id?: string | null
          created_at?: string
          custom_coping_strategy_description?: string | null
          custom_product_name?: string | null
          custom_trigger_description?: string | null
          id?: string
          logged_at?: string
          mood_after?: number | null
          mood_before?: number | null
          notes?: string | null
          product_type?: string | null
          quantity?: number | null
          unit?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_fresh_nicotine_logs_coping_strategy_id_fkey"
            columns: ["coping_strategy_id"]
            isOneToOne: false
            referencedRelation: "coping_strategies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_fresh_nicotine_logs_craving_trigger_id_fkey"
            columns: ["craving_trigger_id"]
            isOneToOne: false
            referencedRelation: "triggers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_fresh_nicotine_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_fresh_physical_activity_logs: {
        Row: {
          activity_type: string
          calories_burned: number | null
          created_at: string
          distance_km: number | null
          duration_minutes: number | null
          id: string
          intensity: string | null
          notes: string | null
          steps: number | null
          timestamp: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          activity_type: string
          calories_burned?: number | null
          created_at?: string
          distance_km?: number | null
          duration_minutes?: number | null
          id?: string
          intensity?: string | null
          notes?: string | null
          steps?: number | null
          timestamp?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          activity_type?: string
          calories_burned?: number | null
          created_at?: string
          distance_km?: number | null
          duration_minutes?: number | null
          id?: string
          intensity?: string | null
          notes?: string | null
          steps?: number | null
          timestamp?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_fresh_post_likes: {
        Row: {
          created_at: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_fresh_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "fella_fresh_community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_fresh_reflections: {
        Row: {
          content: string | null
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_fresh_sleep_logs: {
        Row: {
          created_at: string
          date: string
          id: string
          notes: string | null
          sleep_duration_hours: number
          sleep_quality: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          notes?: string | null
          sleep_duration_hours: number
          sleep_quality: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          notes?: string | null
          sleep_duration_hours?: number
          sleep_quality?: number
          user_id?: string | null
        }
        Relationships: []
      }
      fella_fresh_social_support_interactions: {
        Row: {
          contact_person_nickname: string | null
          created_at: string
          duration_minutes: number | null
          feeling_after: string | null
          feeling_before: string | null
          id: string
          interaction_type: string
          notes: string | null
          platform: string | null
          timestamp: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          contact_person_nickname?: string | null
          created_at?: string
          duration_minutes?: number | null
          feeling_after?: string | null
          feeling_before?: string | null
          id?: string
          interaction_type: string
          notes?: string | null
          platform?: string | null
          timestamp?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          contact_person_nickname?: string | null
          created_at?: string
          duration_minutes?: number | null
          feeling_after?: string | null
          feeling_before?: string | null
          id?: string
          interaction_type?: string
          notes?: string | null
          platform?: string | null
          timestamp?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_note_drawings: {
        Row: {
          created_at: string
          drawing_content: Json | null
          id: string
          team_id: string | null
          thumbnail_svg: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          drawing_content?: Json | null
          id?: string
          team_id?: string | null
          thumbnail_svg?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          drawing_content?: Json | null
          id?: string
          team_id?: string | null
          thumbnail_svg?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_note_drawings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_note_memory_palaces: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_note_mind_map_edges: {
        Row: {
          created_at: string
          id: string
          label: string | null
          map_id: string
          source_node_id: string
          target_node_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          label?: string | null
          map_id: string
          source_node_id: string
          target_node_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          label?: string | null
          map_id?: string
          source_node_id?: string
          target_node_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_note_mind_map_edges_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "fella_note_mind_maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_note_mind_map_edges_source_node_id_fkey"
            columns: ["source_node_id"]
            isOneToOne: false
            referencedRelation: "fella_note_mind_map_nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_note_mind_map_edges_target_node_id_fkey"
            columns: ["target_node_id"]
            isOneToOne: false
            referencedRelation: "fella_note_mind_map_nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_note_mind_map_nodes: {
        Row: {
          color: string | null
          content: string | null
          created_at: string
          id: string
          label: string
          map_id: string
          parent_id: string | null
          updated_at: string
          user_id: string
          x_position: number
          y_position: number
        }
        Insert: {
          color?: string | null
          content?: string | null
          created_at?: string
          id?: string
          label: string
          map_id: string
          parent_id?: string | null
          updated_at?: string
          user_id: string
          x_position: number
          y_position: number
        }
        Update: {
          color?: string | null
          content?: string | null
          created_at?: string
          id?: string
          label?: string
          map_id?: string
          parent_id?: string | null
          updated_at?: string
          user_id?: string
          x_position?: number
          y_position?: number
        }
        Relationships: [
          {
            foreignKeyName: "fella_note_mind_map_nodes_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "fella_note_mind_maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fella_note_mind_map_nodes_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "fella_note_mind_map_nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_note_mind_maps: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          team_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          team_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          team_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_note_mind_maps_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_note_palace_rooms: {
        Row: {
          background_image_url: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          order_index: number
          palace_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          background_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          order_index?: number
          palace_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          background_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          order_index?: number
          palace_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fella_note_palace_rooms_palace_id_fkey"
            columns: ["palace_id"]
            isOneToOne: false
            referencedRelation: "fella_note_memory_palaces"
            referencedColumns: ["id"]
          },
        ]
      }
      fella_quit_custom_habits: {
        Row: {
          created_at: string
          id: string
          name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      fella_quit_push_tokens: {
        Row: {
          created_at: string | null
          id: string
          platform: string | null
          token: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          platform?: string | null
          token: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          platform?: string | null
          token?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fella_quit_rewards: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          metadata: Json | null
          name: string
          points_required: number
          reward_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          metadata?: Json | null
          name: string
          points_required?: number
          reward_type?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          metadata?: Json | null
          name?: string
          points_required?: number
          reward_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      fella_quit_support_resources: {
        Row: {
          accessibility_info: string | null
          added_by: string | null
          address: string | null
          city: string | null
          contact_info: Json | null
          cost_details: string | null
          country: string | null
          created_at: string
          description: string | null
          id: string
          is_online_resource: boolean | null
          languages_spoken: string[] | null
          last_verified_at: string | null
          latitude: number | null
          location: unknown | null
          longitude: number | null
          name: string
          operating_hours: Json | null
          postal_code: string | null
          resource_type: string | null
          specialties: string[] | null
          state_province: string | null
          target_audience: string | null
          verified: boolean | null
        }
        Insert: {
          accessibility_info?: string | null
          added_by?: string | null
          address?: string | null
          city?: string | null
          contact_info?: Json | null
          cost_details?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_online_resource?: boolean | null
          languages_spoken?: string[] | null
          last_verified_at?: string | null
          latitude?: number | null
          location?: unknown | null
          longitude?: number | null
          name: string
          operating_hours?: Json | null
          postal_code?: string | null
          resource_type?: string | null
          specialties?: string[] | null
          state_province?: string | null
          target_audience?: string | null
          verified?: boolean | null
        }
        Update: {
          accessibility_info?: string | null
          added_by?: string | null
          address?: string | null
          city?: string | null
          contact_info?: Json | null
          cost_details?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_online_resource?: boolean | null
          languages_spoken?: string[] | null
          last_verified_at?: string | null
          latitude?: number | null
          location?: unknown | null
          longitude?: number | null
          name?: string
          operating_hours?: Json | null
          postal_code?: string | null
          resource_type?: string | null
          specialties?: string[] | null
          state_province?: string | null
          target_audience?: string | null
          verified?: boolean | null
        }
        Relationships: []
      }
      fella_quit_testimonials: {
        Row: {
          app_tag: string | null
          author: string
          created_at: string
          id: number
          is_approved: boolean
          quote: string
          title: string | null
          user_id: string | null
        }
        Insert: {
          app_tag?: string | null
          author: string
          created_at?: string
          id?: number
          is_approved?: boolean
          quote: string
          title?: string | null
          user_id?: string | null
        }
        Update: {
          app_tag?: string | null
          author?: string
          created_at?: string
          id?: number
          is_approved?: boolean
          quote?: string
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      fella_quotes: {
        Row: {
          author: string | null
          created_at: string
          id: number
          quote_text: string
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: number
          quote_text: string
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: number
          quote_text?: string
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      food_logs: {
        Row: {
          barcode: string | null
          calcium_mg: number | null
          calories: number
          carbs_g: number
          created_at: string
          fat_g: number
          fiber_g: number | null
          food_name: string
          id: string
          image_url: string | null
          iron_mg: number | null
          log_date: string
          meal_type: string
          notes: string | null
          potassium_mg: number | null
          protein_g: number
          serving_size: number
          serving_unit: string
          sodium_mg: number | null
          sugar_g: number | null
          user_id: string
          vitaminA_mcg: number | null
          vitaminC_mg: number | null
          vitaminD_mcg: number | null
        }
        Insert: {
          barcode?: string | null
          calcium_mg?: number | null
          calories: number
          carbs_g: number
          created_at?: string
          fat_g: number
          fiber_g?: number | null
          food_name: string
          id?: string
          image_url?: string | null
          iron_mg?: number | null
          log_date: string
          meal_type: string
          notes?: string | null
          potassium_mg?: number | null
          protein_g: number
          serving_size: number
          serving_unit: string
          sodium_mg?: number | null
          sugar_g?: number | null
          user_id: string
          vitaminA_mcg?: number | null
          vitaminC_mg?: number | null
          vitaminD_mcg?: number | null
        }
        Update: {
          barcode?: string | null
          calcium_mg?: number | null
          calories?: number
          carbs_g?: number
          created_at?: string
          fat_g?: number
          fiber_g?: number | null
          food_name?: string
          id?: string
          image_url?: string | null
          iron_mg?: number | null
          log_date?: string
          meal_type?: string
          notes?: string | null
          potassium_mg?: number | null
          protein_g?: number
          serving_size?: number
          serving_unit?: string
          sodium_mg?: number | null
          sugar_g?: number | null
          user_id?: string
          vitaminA_mcg?: number | null
          vitaminC_mg?: number | null
          vitaminD_mcg?: number | null
        }
        Relationships: []
      }
      forum_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_posts: {
        Row: {
          content: string
          created_at: string
          id: string
          title: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          title: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      forums: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      game_scores: {
        Row: {
          created_at: string
          game_name: string
          id: string
          level: number | null
          score: number
          user_id: string
        }
        Insert: {
          created_at?: string
          game_name: string
          id?: string
          level?: number | null
          score: number
          user_id: string
        }
        Update: {
          created_at?: string
          game_name?: string
          id?: string
          level?: number | null
          score?: number
          user_id?: string
        }
        Relationships: []
      }
      goal_milestones: {
        Row: {
          achieved: boolean | null
          achieved_at: string | null
          created_at: string | null
          description: string | null
          goal_id: string
          id: string
          target_value: number | null
          title: string
        }
        Insert: {
          achieved?: boolean | null
          achieved_at?: string | null
          created_at?: string | null
          description?: string | null
          goal_id: string
          id?: string
          target_value?: number | null
          title: string
        }
        Update: {
          achieved?: boolean | null
          achieved_at?: string | null
          created_at?: string | null
          description?: string | null
          goal_id?: string
          id?: string
          target_value?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "goal_milestones_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "user_goals"
            referencedColumns: ["id"]
          },
        ]
      }
      goal_progress: {
        Row: {
          created_at: string | null
          date: string
          goal_id: string
          id: string
          notes: string | null
          value: number
        }
        Insert: {
          created_at?: string | null
          date: string
          goal_id: string
          id?: string
          notes?: string | null
          value: number
        }
        Update: {
          created_at?: string | null
          date?: string
          goal_id?: string
          id?: string
          notes?: string | null
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "goal_progress_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "user_goals"
            referencedColumns: ["id"]
          },
        ]
      }
      group_discussions: {
        Row: {
          attachments: Json | null
          created_at: string
          group_id: string
          id: string
          mentioned_user_ids: string[] | null
          message_content: string
          parent_message_id: string | null
          reactions: Json | null
          tags: string[] | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          attachments?: Json | null
          created_at?: string
          group_id: string
          id?: string
          mentioned_user_ids?: string[] | null
          message_content: string
          parent_message_id?: string | null
          reactions?: Json | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          attachments?: Json | null
          created_at?: string
          group_id?: string
          id?: string
          mentioned_user_ids?: string[] | null
          message_content?: string
          parent_message_id?: string | null
          reactions?: Json | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "group_discussions_parent_message_id_fkey"
            columns: ["parent_message_id"]
            isOneToOne: false
            referencedRelation: "group_discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      group_member_categories: {
        Row: {
          created_at: string | null
          group_id: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          group_id: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          group_id?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_member_categories_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      group_members: {
        Row: {
          created_at: string | null
          group_id: string
          id: string
          member_category_id: string | null
          role: string | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          group_id: string
          id?: string
          member_category_id?: string | null
          role?: string | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          group_id?: string
          id?: string
          member_category_id?: string | null
          role?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_members_member_category_id_fkey"
            columns: ["member_category_id"]
            isOneToOne: false
            referencedRelation: "group_member_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      group_messages: {
        Row: {
          content: string
          created_at: string
          deleted_at: string | null
          group_id: string
          id: string
          is_edited: boolean | null
          media_url: string | null
          message_type: string | null
          parent_message_id: string | null
          read_by: string[] | null
          sender_id: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          deleted_at?: string | null
          group_id: string
          id?: string
          is_edited?: boolean | null
          media_url?: string | null
          message_type?: string | null
          parent_message_id?: string | null
          read_by?: string[] | null
          sender_id: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          deleted_at?: string | null
          group_id?: string
          id?: string
          is_edited?: boolean | null
          media_url?: string | null
          message_type?: string | null
          parent_message_id?: string | null
          read_by?: string[] | null
          sender_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_messages_parent_message_id_fkey"
            columns: ["parent_message_id"]
            isOneToOne: false
            referencedRelation: "group_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      groups: {
        Row: {
          care_recipient_profile_id: string | null
          cover_image_url: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          is_public: boolean
          location: string | null
          name: string
          settings: Json | null
          status: string
          updated_at: string
        }
        Insert: {
          care_recipient_profile_id?: string | null
          cover_image_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean
          location?: string | null
          name: string
          settings?: Json | null
          status?: string
          updated_at?: string
        }
        Update: {
          care_recipient_profile_id?: string | null
          cover_image_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean
          location?: string | null
          name?: string
          settings?: Json | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "groups_care_recipient_profile_id_fkey"
            columns: ["care_recipient_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "groups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      habit_completions: {
        Row: {
          completed_at: string
          created_at: string
          habit_id: string
          id: string
          notes: string | null
          user_id: string
        }
        Insert: {
          completed_at: string
          created_at?: string
          habit_id: string
          id?: string
          notes?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string
          created_at?: string
          habit_id?: string
          id?: string
          notes?: string | null
          user_id?: string
        }
        Relationships: []
      }
      habit_logs: {
        Row: {
          completed_value: number | null
          created_at: string
          habit_id: string
          id: string
          is_completed: boolean
          log_date: string
          notes: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_value?: number | null
          created_at?: string
          habit_id: string
          id?: string
          is_completed?: boolean
          log_date: string
          notes?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_value?: number | null
          created_at?: string
          habit_id?: string
          id?: string
          is_completed?: boolean
          log_date?: string
          notes?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "habit_logs_habit_id_fkey"
            columns: ["habit_id"]
            isOneToOne: false
            referencedRelation: "habits"
            referencedColumns: ["id"]
          },
        ]
      }
      habits: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          end_date: string | null
          frequency_details: Json | null
          frequency_type: string
          icon: string | null
          id: string
          name: string
          reminder_time: string | null
          start_date: string
          target_unit: string | null
          target_value: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          frequency_details?: Json | null
          frequency_type: string
          icon?: string | null
          id?: string
          name: string
          reminder_time?: string | null
          start_date?: string
          target_unit?: string | null
          target_value?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          frequency_details?: Json | null
          frequency_type?: string
          icon?: string | null
          id?: string
          name?: string
          reminder_time?: string | null
          start_date?: string
          target_unit?: string | null
          target_value?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      health_metrics: {
        Row: {
          created_at: string | null
          date: string
          emotion_tags: string[] | null
          energy_level: number | null
          factors: string[] | null
          focus_level: number | null
          id: string
          meditation_minutes: number | null
          mood: number | null
          notes: string | null
          sleep_hours: number | null
          sleep_quality: number | null
          stress_level: number | null
          symptoms: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          date: string
          emotion_tags?: string[] | null
          energy_level?: number | null
          factors?: string[] | null
          focus_level?: number | null
          id?: string
          meditation_minutes?: number | null
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          symptoms?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          date?: string
          emotion_tags?: string[] | null
          energy_level?: number | null
          factors?: string[] | null
          focus_level?: number | null
          id?: string
          meditation_minutes?: number | null
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          symptoms?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      hydration_logs: {
        Row: {
          amount_ml: number
          created_at: string | null
          id: string
          intake_type: string | null
          timestamp: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount_ml: number
          created_at?: string | null
          id?: string
          intake_type?: string | null
          timestamp?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount_ml?: number
          created_at?: string | null
          id?: string
          intake_type?: string | null
          timestamp?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      journal_entries: {
        Row: {
          content: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      kanban_board_members: {
        Row: {
          board_id: string
          invited_at: string
          joined_at: string | null
          role: string
          user_id: string
        }
        Insert: {
          board_id: string
          invited_at?: string
          joined_at?: string | null
          role: string
          user_id: string
        }
        Update: {
          board_id?: string
          invited_at?: string
          joined_at?: string | null
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "kanban_board_members_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "kanban_boards"
            referencedColumns: ["id"]
          },
        ]
      }
      kanban_boards: {
        Row: {
          column_order: string[] | null
          created_at: string
          description: string | null
          id: string
          name: string
          owner_id: string
          team_id: string | null
          updated_at: string
        }
        Insert: {
          column_order?: string[] | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          owner_id: string
          team_id?: string | null
          updated_at?: string
        }
        Update: {
          column_order?: string[] | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          team_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "kanban_boards_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      kanban_cards: {
        Row: {
          assignee_ids: string[] | null
          attachments: Json | null
          board_id: string | null
          column_id: string
          content: string
          cover_image_url: string | null
          created_at: string
          creator_id: string | null
          description: string | null
          due_date: string | null
          id: string
          position: number
          priority: string | null
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          assignee_ids?: string[] | null
          attachments?: Json | null
          board_id?: string | null
          column_id: string
          content: string
          cover_image_url?: string | null
          created_at?: string
          creator_id?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          position?: number
          priority?: string | null
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          assignee_ids?: string[] | null
          attachments?: Json | null
          board_id?: string | null
          column_id?: string
          content?: string
          cover_image_url?: string | null
          created_at?: string
          creator_id?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          position?: number
          priority?: string | null
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "kanban_cards_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "kanban_boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kanban_cards_column_id_fkey"
            columns: ["column_id"]
            isOneToOne: false
            referencedRelation: "kanban_columns"
            referencedColumns: ["id"]
          },
        ]
      }
      kanban_columns: {
        Row: {
          board_id: string
          card_order: string[] | null
          created_at: string
          id: string
          name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          board_id: string
          card_order?: string[] | null
          created_at?: string
          id?: string
          name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          board_id?: string
          card_order?: string[] | null
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kanban_columns_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "kanban_boards"
            referencedColumns: ["id"]
          },
        ]
      }
      kanban_tasks: {
        Row: {
          assignee_ids: string[] | null
          attachments: Json | null
          board_id: string
          column_id: string
          content: string
          cover_image_url: string | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          position: number
          priority: string | null
          tags: string[] | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assignee_ids?: string[] | null
          attachments?: Json | null
          board_id: string
          column_id: string
          content: string
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          position: number
          priority?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assignee_ids?: string[] | null
          attachments?: Json | null
          board_id?: string
          column_id?: string
          content?: string
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          position?: number
          priority?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kanban_tasks_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "kanban_boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kanban_tasks_column_id_fkey"
            columns: ["column_id"]
            isOneToOne: false
            referencedRelation: "kanban_columns"
            referencedColumns: ["id"]
          },
        ]
      }
      knowledge_items: {
        Row: {
          ai_prompt: string | null
          care_group_id: string
          content: string | null
          created_at: string
          created_by: string | null
          id: string
          is_ai_assisted: boolean | null
          item_type: string
          title: string
          updated_at: string
        }
        Insert: {
          ai_prompt?: string | null
          care_group_id: string
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_ai_assisted?: boolean | null
          item_type: string
          title: string
          updated_at?: string
        }
        Update: {
          ai_prompt?: string | null
          care_group_id?: string
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_ai_assisted?: boolean | null
          item_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_items_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      learning_modules: {
        Row: {
          category: string | null
          content: Json | null
          created_at: string
          description: string | null
          estimated_duration_minutes: number | null
          id: string
          is_published: boolean
          order_index: number | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          content?: Json | null
          created_at?: string
          description?: string | null
          estimated_duration_minutes?: number | null
          id?: string
          is_published?: boolean
          order_index?: number | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          content?: Json | null
          created_at?: string
          description?: string | null
          estimated_duration_minutes?: number | null
          id?: string
          is_published?: boolean
          order_index?: number | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      level_thresholds: {
        Row: {
          created_at: string
          level: number
          points_required: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          level: number
          points_required: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          level?: number
          points_required?: number
          updated_at?: string
        }
        Relationships: []
      }
      meditation_sessions: {
        Row: {
          completed_at: string
          created_at: string
          duration: number
          id: string
          notes: string | null
          session_type: string
          user_id: string
        }
        Insert: {
          completed_at: string
          created_at?: string
          duration: number
          id?: string
          notes?: string | null
          session_type: string
          user_id: string
        }
        Update: {
          completed_at?: string
          created_at?: string
          duration?: number
          id?: string
          notes?: string | null
          session_type?: string
          user_id?: string
        }
        Relationships: []
      }
      meditation_tracks: {
        Row: {
          audio_url: string
          created_at: string
          description: string | null
          duration: number | null
          id: string
          title: string
          type: string | null
        }
        Insert: {
          audio_url: string
          created_at?: string
          description?: string | null
          duration?: number | null
          id?: string
          title: string
          type?: string | null
        }
        Update: {
          audio_url?: string
          created_at?: string
          description?: string | null
          duration?: number | null
          id?: string
          title?: string
          type?: string | null
        }
        Relationships: []
      }
      meditations: {
        Row: {
          audio_url: string
          category: string
          created_at: string
          description: string
          duration_seconds: number
          featured: boolean | null
          id: string
          image_url: string | null
          level: string
          popularity: number | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          audio_url: string
          category: string
          created_at?: string
          description: string
          duration_seconds: number
          featured?: boolean | null
          id?: string
          image_url?: string | null
          level: string
          popularity?: number | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          audio_url?: string
          category?: string
          created_at?: string
          description?: string
          duration_seconds?: number
          featured?: boolean | null
          id?: string
          image_url?: string | null
          level?: string
          popularity?: number | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      member_categories: {
        Row: {
          care_group_id: string
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          care_group_id: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          care_group_id?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "member_categories_care_group_id_fkey"
            columns: ["care_group_id"]
            isOneToOne: false
            referencedRelation: "care_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      memory_palaces: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      message_reactions: {
        Row: {
          created_at: string
          id: string
          message_id: string
          message_table: string
          reaction: Database["public"]["Enums"]["reaction_emoji"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message_id: string
          message_table: string
          reaction: Database["public"]["Enums"]["reaction_emoji"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message_id?: string
          message_table?: string
          reaction?: Database["public"]["Enums"]["reaction_emoji"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mind_map_edges: {
        Row: {
          created_at: string
          id: string
          label: string | null
          map_id: string
          source_node_id: string
          target_node_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          label?: string | null
          map_id: string
          source_node_id: string
          target_node_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          label?: string | null
          map_id?: string
          source_node_id?: string
          target_node_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mind_map_edges_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "mind_maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mind_map_edges_source_node_id_fkey"
            columns: ["source_node_id"]
            isOneToOne: false
            referencedRelation: "mind_map_nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mind_map_edges_target_node_id_fkey"
            columns: ["target_node_id"]
            isOneToOne: false
            referencedRelation: "mind_map_nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      mind_map_nodes: {
        Row: {
          color: string | null
          content: string | null
          created_at: string
          height: number | null
          id: string
          map_id: string
          parent_id: string | null
          position_x: number | null
          position_y: number | null
          updated_at: string
          user_id: string
          width: number | null
        }
        Insert: {
          color?: string | null
          content?: string | null
          created_at?: string
          height?: number | null
          id?: string
          map_id: string
          parent_id?: string | null
          position_x?: number | null
          position_y?: number | null
          updated_at?: string
          user_id: string
          width?: number | null
        }
        Update: {
          color?: string | null
          content?: string | null
          created_at?: string
          height?: number | null
          id?: string
          map_id?: string
          parent_id?: string | null
          position_x?: number | null
          position_y?: number | null
          updated_at?: string
          user_id?: string
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "mind_map_nodes_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "mind_maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mind_map_nodes_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "mind_map_nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      mind_maps: {
        Row: {
          created_at: string
          id: string
          name: string
          team_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          team_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          team_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mind_maps_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      mindfulness_moment_reminders: {
        Row: {
          activity_type: string
          created_at: string
          id: string
          time: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          activity_type: string
          created_at?: string
          id?: string
          time: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          activity_type?: string
          created_at?: string
          id?: string
          time?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      mood_entries: {
        Row: {
          created_at: string
          id: string
          mood: string
          notes: string | null
          timestamp: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          mood: string
          notes?: string | null
          timestamp?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          mood?: string
          notes?: string | null
          timestamp?: string
          user_id?: string
        }
        Relationships: []
      }
      mood_logs: {
        Row: {
          created_at: string
          energy_level: number | null
          factors: Json | null
          focus_level: number | null
          id: string
          mood_score: number | null
          notes: string | null
          session_id: string | null
          stress_level: number | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          energy_level?: number | null
          factors?: Json | null
          focus_level?: number | null
          id?: string
          mood_score?: number | null
          notes?: string | null
          session_id?: string | null
          stress_level?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          energy_level?: number | null
          factors?: Json | null
          focus_level?: number | null
          id?: string
          mood_score?: number | null
          notes?: string | null
          session_id?: string | null
          stress_level?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mood_logs_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "breathing_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      motivation_streaks: {
        Row: {
          count: number | null
          created_at: string | null
          id: string
          last_updated: string | null
          streak_type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          count?: number | null
          created_at?: string | null
          id?: string
          last_updated?: string | null
          streak_type: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          count?: number | null
          created_at?: string | null
          id?: string
          last_updated?: string | null
          streak_type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      motivational_quotes: {
        Row: {
          author: string | null
          created_at: string
          id: string
          quote: string
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: string
          quote: string
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: string
          quote?: string
        }
        Relationships: []
      }
      note_tags: {
        Row: {
          created_at: string
          note_id: string
          tag_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          note_id: string
          tag_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          note_id?: string
          tag_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "note_tags_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "note_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      note_templates: {
        Row: {
          category: string | null
          content_json: Json
          cover_image_url: string | null
          created_at: string
          description: string | null
          id: string
          is_public: boolean
          name: string
          tags: string[] | null
          times_used: number
          updated_at: string
          user_id: string
        }
        Insert: {
          category?: string | null
          content_json: Json
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean
          name: string
          tags?: string[] | null
          times_used?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string | null
          content_json?: Json
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean
          name?: string
          tags?: string[] | null
          times_used?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      notebooks: {
        Row: {
          created_at: string
          id: string
          name: string
          parent_notebook_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          parent_notebook_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          parent_notebook_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notebooks_parent_notebook_id_fkey"
            columns: ["parent_notebook_id"]
            isOneToOne: false
            referencedRelation: "notebooks"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          content: string | null
          created_at: string
          id: string
          notebook_id: string | null
          team_id: string | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          notebook_id?: string | null
          team_id?: string | null
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          notebook_id?: string | null
          team_id?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notes_notebook_id_fkey"
            columns: ["notebook_id"]
            isOneToOne: false
            referencedRelation: "notebooks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_preferences: {
        Row: {
          achievement_notifications: boolean | null
          created_at: string | null
          daily_digest: boolean | null
          enable_email: boolean | null
          enable_push: boolean | null
          progress_updates: boolean | null
          streak_reminders: boolean | null
          tool_suggestions: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          achievement_notifications?: boolean | null
          created_at?: string | null
          daily_digest?: boolean | null
          enable_email?: boolean | null
          enable_push?: boolean | null
          progress_updates?: boolean | null
          streak_reminders?: boolean | null
          tool_suggestions?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          achievement_notifications?: boolean | null
          created_at?: string | null
          daily_digest?: boolean | null
          enable_email?: boolean | null
          enable_push?: boolean | null
          progress_updates?: boolean | null
          streak_reminders?: boolean | null
          tool_suggestions?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_read: boolean | null
          related_entity_id: string | null
          related_table: string | null
          type: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          related_entity_id?: string | null
          related_table?: string | null
          type: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          related_entity_id?: string | null
          related_table?: string | null
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      nrt_reminders: {
        Row: {
          created_at: string
          custom_notes: string | null
          custom_nrt_name: string | null
          end_date: string | null
          frequency_type: string
          id: string
          interval_days: number | null
          is_active: boolean
          nrt_type: string
          reminder_time: string
          specific_days: Json | null
          start_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          custom_notes?: string | null
          custom_nrt_name?: string | null
          end_date?: string | null
          frequency_type: string
          id?: string
          interval_days?: number | null
          is_active?: boolean
          nrt_type: string
          reminder_time: string
          specific_days?: Json | null
          start_date: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          custom_notes?: string | null
          custom_nrt_name?: string | null
          end_date?: string | null
          frequency_type?: string
          id?: string
          interval_days?: number | null
          is_active?: boolean
          nrt_type?: string
          reminder_time?: string
          specific_days?: Json | null
          start_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "nrt_reminders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      nutrition_goals: {
        Row: {
          calories_goal: number | null
          carbs_goal_g: number | null
          created_at: string
          fat_goal_g: number | null
          fiber_goal_g: number | null
          id: string
          is_active: boolean
          protein_goal_g: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          calories_goal?: number | null
          carbs_goal_g?: number | null
          created_at?: string
          fat_goal_g?: number | null
          fiber_goal_g?: number | null
          id?: string
          is_active?: boolean
          protein_goal_g?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          calories_goal?: number | null
          carbs_goal_g?: number | null
          created_at?: string
          fat_goal_g?: number | null
          fiber_goal_g?: number | null
          id?: string
          is_active?: boolean
          protein_goal_g?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      palace_edges: {
        Row: {
          created_at: string
          id: string
          label: string | null
          palace_id: string
          source_node_id: string
          target_node_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          label?: string | null
          palace_id: string
          source_node_id: string
          target_node_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          label?: string | null
          palace_id?: string
          source_node_id?: string
          target_node_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "palace_edges_palace_id_fkey"
            columns: ["palace_id"]
            isOneToOne: false
            referencedRelation: "memory_palaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "palace_edges_source_node_id_fkey"
            columns: ["source_node_id"]
            isOneToOne: false
            referencedRelation: "palace_nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "palace_edges_target_node_id_fkey"
            columns: ["target_node_id"]
            isOneToOne: false
            referencedRelation: "palace_nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      palace_items: {
        Row: {
          content_text: string | null
          created_at: string
          id: string
          linked_note_id: string | null
          name: string
          room_id: string
          updated_at: string
          x_coord: number | null
          y_coord: number | null
        }
        Insert: {
          content_text?: string | null
          created_at?: string
          id?: string
          linked_note_id?: string | null
          name: string
          room_id: string
          updated_at?: string
          x_coord?: number | null
          y_coord?: number | null
        }
        Update: {
          content_text?: string | null
          created_at?: string
          id?: string
          linked_note_id?: string | null
          name?: string
          room_id?: string
          updated_at?: string
          x_coord?: number | null
          y_coord?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "palace_items_linked_note_id_fkey"
            columns: ["linked_note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "palace_items_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "palace_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      palace_nodes: {
        Row: {
          color: string | null
          content: Json | null
          created_at: string
          height: number
          id: string
          palace_id: string
          position_x: number
          position_y: number
          type: Database["public"]["Enums"]["palace_node_type"]
          updated_at: string
          user_id: string
          width: number
        }
        Insert: {
          color?: string | null
          content?: Json | null
          created_at?: string
          height?: number
          id?: string
          palace_id: string
          position_x?: number
          position_y?: number
          type: Database["public"]["Enums"]["palace_node_type"]
          updated_at?: string
          user_id: string
          width?: number
        }
        Update: {
          color?: string | null
          content?: Json | null
          created_at?: string
          height?: number
          id?: string
          palace_id?: string
          position_x?: number
          position_y?: number
          type?: Database["public"]["Enums"]["palace_node_type"]
          updated_at?: string
          user_id?: string
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: "palace_nodes_palace_id_fkey"
            columns: ["palace_id"]
            isOneToOne: false
            referencedRelation: "memory_palaces"
            referencedColumns: ["id"]
          },
        ]
      }
      palace_rooms: {
        Row: {
          background_image_url: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          order_index: number
          palace_id: string
          updated_at: string
        }
        Insert: {
          background_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          order_index?: number
          palace_id: string
          updated_at?: string
        }
        Update: {
          background_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          order_index?: number
          palace_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "palace_rooms_palace_id_fkey"
            columns: ["palace_id"]
            isOneToOne: false
            referencedRelation: "memory_palaces"
            referencedColumns: ["id"]
          },
        ]
      }
      post_it_notes: {
        Row: {
          color: string | null
          content: string | null
          created_at: string
          height: number | null
          id: string
          position_x: number | null
          position_y: number | null
          updated_at: string
          user_id: string
          width: number | null
        }
        Insert: {
          color?: string | null
          content?: string | null
          created_at?: string
          height?: number | null
          id?: string
          position_x?: number | null
          position_y?: number | null
          updated_at?: string
          user_id: string
          width?: number | null
        }
        Update: {
          color?: string | null
          content?: string | null
          created_at?: string
          height?: number | null
          id?: string
          position_x?: number | null
          position_y?: number | null
          updated_at?: string
          user_id?: string
          width?: number | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          author_id: string | null
          content: string
          created_at: string | null
          id: string
          thread_id: string | null
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string | null
          id?: string
          thread_id?: string | null
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string | null
          id?: string
          thread_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          ai_nickname: string | null
          avatar_url: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          interests: string[] | null
          is_admin: boolean | null
          is_public: boolean | null
          languages: string[] | null
          last_name: string | null
          location: string | null
          needs: string | null
          personality_traits: string[] | null
          phone_number: string | null
          points: number | null
          preferences: string | null
          push_token: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          shareable_code: string | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          ai_nickname?: string | null
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          interests?: string[] | null
          is_admin?: boolean | null
          is_public?: boolean | null
          languages?: string[] | null
          last_name?: string | null
          location?: string | null
          needs?: string | null
          personality_traits?: string[] | null
          phone_number?: string | null
          points?: number | null
          preferences?: string | null
          push_token?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          shareable_code?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          ai_nickname?: string | null
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          interests?: string[] | null
          is_admin?: boolean | null
          is_public?: boolean | null
          languages?: string[] | null
          last_name?: string | null
          location?: string | null
          needs?: string | null
          personality_traits?: string[] | null
          phone_number?: string | null
          points?: number | null
          preferences?: string | null
          push_token?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          shareable_code?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      program_steps: {
        Row: {
          created_at: string | null
          description: string | null
          duration_seconds: number | null
          id: string
          meditation_id: string | null
          program_id: string
          step_number: number
          technique_id: string | null
          title: string
          type: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_seconds?: number | null
          id?: string
          meditation_id?: string | null
          program_id: string
          step_number: number
          technique_id?: string | null
          title: string
          type: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_seconds?: number | null
          id?: string
          meditation_id?: string | null
          program_id?: string
          step_number?: number
          technique_id?: string | null
          title?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "program_steps_meditation_id_fkey"
            columns: ["meditation_id"]
            isOneToOne: false
            referencedRelation: "meditations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_steps_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_steps_technique_id_fkey"
            columns: ["technique_id"]
            isOneToOne: false
            referencedRelation: "breathing_techniques"
            referencedColumns: ["id"]
          },
        ]
      }
      programs: {
        Row: {
          created_at: string | null
          description: string | null
          duration_weeks: number | null
          id: string
          image_url: string | null
          is_published: boolean | null
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_weeks?: number | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_weeks?: number | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          name?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          color: string | null
          created_at: string
          id: string
          name: string
          team_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          id?: string
          name: string
          team_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string
          id?: string
          name?: string
          team_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      push_tokens: {
        Row: {
          created_at: string | null
          id: string
          platform: string | null
          token: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          platform?: string | null
          token: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          platform?: string | null
          token?: string
          user_id?: string | null
        }
        Relationships: []
      }
      recovery_milestones: {
        Row: {
          achieved_at: string | null
          days_since_quit: number | null
          health_improvements: string[] | null
          id: string
          milestone_type: string
          notes: string | null
          user_id: string
        }
        Insert: {
          achieved_at?: string | null
          days_since_quit?: number | null
          health_improvements?: string[] | null
          id?: string
          milestone_type: string
          notes?: string | null
          user_id: string
        }
        Update: {
          achieved_at?: string | null
          days_since_quit?: number | null
          health_improvements?: string[] | null
          id?: string
          milestone_type?: string
          notes?: string | null
          user_id?: string
        }
        Relationships: []
      }
      relapses: {
        Row: {
          coping_strategy_attempted_id: string | null
          created_at: string
          feelings_after: string | null
          feelings_before: string | null
          id: number
          learned: string | null
          reported_at: string
          situation: string | null
          trigger: string | null
          trigger_id: string | null
          user_id: string
        }
        Insert: {
          coping_strategy_attempted_id?: string | null
          created_at?: string
          feelings_after?: string | null
          feelings_before?: string | null
          id?: number
          learned?: string | null
          reported_at?: string
          situation?: string | null
          trigger?: string | null
          trigger_id?: string | null
          user_id: string
        }
        Update: {
          coping_strategy_attempted_id?: string | null
          created_at?: string
          feelings_after?: string | null
          feelings_before?: string | null
          id?: number
          learned?: string | null
          reported_at?: string
          situation?: string | null
          trigger?: string | null
          trigger_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "relapses_coping_strategy_attempted_id_fkey"
            columns: ["coping_strategy_attempted_id"]
            isOneToOne: false
            referencedRelation: "coping_strategies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relapses_trigger_id_fkey"
            columns: ["trigger_id"]
            isOneToOne: false
            referencedRelation: "triggers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relapses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      relaxation_sessions: {
        Row: {
          created_at: string | null
          duration_seconds: number
          id: string
          stopped_sounds: boolean | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          duration_seconds: number
          id?: string
          stopped_sounds?: boolean | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          duration_seconds?: number
          id?: string
          stopped_sounds?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["review_entity_type"]
          id: string
          is_anonymous: boolean | null
          rating: number
          reviewer_id: string
          title: string | null
          updated_at: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["review_entity_type"]
          id?: string
          is_anonymous?: boolean | null
          rating: number
          reviewer_id: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          entity_id?: string
          entity_type?: Database["public"]["Enums"]["review_entity_type"]
          id?: string
          is_anonymous?: boolean | null
          rating?: number
          reviewer_id?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      rewards: {
        Row: {
          active: boolean
          created_at: string
          description: string
          id: string
          name: string
          points_required: number
        }
        Insert: {
          active?: boolean
          created_at?: string
          description: string
          id?: string
          name: string
          points_required: number
        }
        Update: {
          active?: boolean
          created_at?: string
          description?: string
          id?: string
          name?: string
          points_required?: number
        }
        Relationships: []
      }
      rewards_catalog: {
        Row: {
          cost: number
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          cost: number
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          cost?: number
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      routine_activities: {
        Row: {
          activity_order: number
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          name: string
          routine_id: string
          user_id: string
        }
        Insert: {
          activity_order: number
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          name: string
          routine_id: string
          user_id: string
        }
        Update: {
          activity_order?: number
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          name?: string
          routine_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "routine_activities_routine_id_fkey"
            columns: ["routine_id"]
            isOneToOne: false
            referencedRelation: "routines"
            referencedColumns: ["id"]
          },
        ]
      }
      routines: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      service_provider_availability: {
        Row: {
          created_at: string | null
          day_of_week: number | null
          end_time: string | null
          id: string
          is_unavailable: boolean | null
          notes: string | null
          service_provider_id: string
          specific_date: string | null
          start_time: string | null
          type: Database["public"]["Enums"]["availability_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          day_of_week?: number | null
          end_time?: string | null
          id?: string
          is_unavailable?: boolean | null
          notes?: string | null
          service_provider_id: string
          specific_date?: string | null
          start_time?: string | null
          type: Database["public"]["Enums"]["availability_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          day_of_week?: number | null
          end_time?: string | null
          id?: string
          is_unavailable?: boolean | null
          notes?: string | null
          service_provider_id?: string
          specific_date?: string | null
          start_time?: string | null
          type?: Database["public"]["Enums"]["availability_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_provider_availability_service_provider_id_fkey"
            columns: ["service_provider_id"]
            isOneToOne: false
            referencedRelation: "service_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      service_provider_bookings: {
        Row: {
          booking_end_time: string
          booking_start_time: string
          cancellation_reason: string | null
          care_recipient_id: string | null
          created_at: string | null
          duration_hours: number | null
          id: string
          notes: string | null
          rescheduled_to_booking_id: string | null
          service_details: string | null
          service_provider_id: string
          status: Database["public"]["Enums"]["booking_status"]
          total_cost: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          booking_end_time: string
          booking_start_time: string
          cancellation_reason?: string | null
          care_recipient_id?: string | null
          created_at?: string | null
          duration_hours?: number | null
          id?: string
          notes?: string | null
          rescheduled_to_booking_id?: string | null
          service_details?: string | null
          service_provider_id: string
          status?: Database["public"]["Enums"]["booking_status"]
          total_cost?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          booking_end_time?: string
          booking_start_time?: string
          cancellation_reason?: string | null
          care_recipient_id?: string | null
          created_at?: string | null
          duration_hours?: number | null
          id?: string
          notes?: string | null
          rescheduled_to_booking_id?: string | null
          service_details?: string | null
          service_provider_id?: string
          status?: Database["public"]["Enums"]["booking_status"]
          total_cost?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "professional_bookings_care_recipient_id_fkey"
            columns: ["care_recipient_id"]
            isOneToOne: false
            referencedRelation: "care_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_provider_bookings_rescheduled_to_booking_id_fkey"
            columns: ["rescheduled_to_booking_id"]
            isOneToOne: false
            referencedRelation: "service_provider_bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_provider_bookings_service_provider_id_fkey"
            columns: ["service_provider_id"]
            isOneToOne: false
            referencedRelation: "service_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      service_provider_ratings: {
        Row: {
          created_at: string
          id: string
          rating: number
          review_text: string | null
          service_provider_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          rating: number
          review_text?: string | null
          service_provider_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          rating?: number
          review_text?: string | null
          service_provider_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_provider_ratings_service_provider_id_fkey"
            columns: ["service_provider_id"]
            isOneToOne: false
            referencedRelation: "service_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      service_provider_reviews: {
        Row: {
          admin_notes: string | null
          booking_id: string
          comment: string | null
          communication_rating: number | null
          created_at: string | null
          flagged_reason: string | null
          id: string
          is_anonymous: boolean | null
          is_approved: boolean | null
          is_flagged: boolean | null
          professionalism_rating: number | null
          rating: number
          service_provider_id: string
          service_quality_rating: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          booking_id: string
          comment?: string | null
          communication_rating?: number | null
          created_at?: string | null
          flagged_reason?: string | null
          id?: string
          is_anonymous?: boolean | null
          is_approved?: boolean | null
          is_flagged?: boolean | null
          professionalism_rating?: number | null
          rating: number
          service_provider_id: string
          service_quality_rating?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          booking_id?: string
          comment?: string | null
          communication_rating?: number | null
          created_at?: string | null
          flagged_reason?: string | null
          id?: string
          is_anonymous?: boolean | null
          is_approved?: boolean | null
          is_flagged?: boolean | null
          professionalism_rating?: number | null
          rating?: number
          service_provider_id?: string
          service_quality_rating?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_provider_reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: true
            referencedRelation: "service_provider_bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_provider_reviews_service_provider_id_fkey"
            columns: ["service_provider_id"]
            isOneToOne: false
            referencedRelation: "service_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      service_provider_services: {
        Row: {
          created_at: string
          custom_price_per_session: number | null
          description: string | null
          id: string
          service_name: string
          service_provider_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          custom_price_per_session?: number | null
          description?: string | null
          id?: string
          service_name: string
          service_provider_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          custom_price_per_session?: number | null
          description?: string | null
          id?: string
          service_name?: string
          service_provider_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_provider_services_service_provider_id_fkey"
            columns: ["service_provider_id"]
            isOneToOne: false
            referencedRelation: "service_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      service_providers: {
        Row: {
          accepted_insurance_plans: string[] | null
          availability_summary: string | null
          average_rating: number | null
          bio: string | null
          certifications: Json | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          full_name: string
          geom: unknown | null
          hourly_rate: number | null
          id: string
          is_verified: boolean | null
          location: string | null
          meeting_preference: string | null
          offers_telehealth: boolean | null
          profile_picture_url: string | null
          provider_type: Database["public"]["Enums"]["service_provider_type"]
          reviews_count: number | null
          specialties: string[] | null
          updated_at: string | null
          user_id: string | null
          website_url: string | null
          years_of_experience: number | null
        }
        Insert: {
          accepted_insurance_plans?: string[] | null
          availability_summary?: string | null
          average_rating?: number | null
          bio?: string | null
          certifications?: Json | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          full_name: string
          geom?: unknown | null
          hourly_rate?: number | null
          id?: string
          is_verified?: boolean | null
          location?: string | null
          meeting_preference?: string | null
          offers_telehealth?: boolean | null
          profile_picture_url?: string | null
          provider_type?: Database["public"]["Enums"]["service_provider_type"]
          reviews_count?: number | null
          specialties?: string[] | null
          updated_at?: string | null
          user_id?: string | null
          website_url?: string | null
          years_of_experience?: number | null
        }
        Update: {
          accepted_insurance_plans?: string[] | null
          availability_summary?: string | null
          average_rating?: number | null
          bio?: string | null
          certifications?: Json | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          full_name?: string
          geom?: unknown | null
          hourly_rate?: number | null
          id?: string
          is_verified?: boolean | null
          location?: string | null
          meeting_preference?: string | null
          offers_telehealth?: boolean | null
          profile_picture_url?: string | null
          provider_type?: Database["public"]["Enums"]["service_provider_type"]
          reviews_count?: number | null
          specialties?: string[] | null
          updated_at?: string | null
          user_id?: string | null
          website_url?: string | null
          years_of_experience?: number | null
        }
        Relationships: []
      }
      session_participants: {
        Row: {
          created_at: string | null
          id: string
          joined_at: string | null
          session_id: string
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          joined_at?: string | null
          session_id: string
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          joined_at?: string | null
          session_id?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_participants_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "support_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      shared_files: {
        Row: {
          created_at: string
          description: string | null
          file_name: string
          file_path: string
          file_size_bytes: number | null
          file_type: string | null
          group_id: string
          id: string
          shared_with_category_ids: string[] | null
          shared_with_member_ids: string[] | null
          updated_at: string
          uploaded_at: string
          uploader_user_id: string | null
          visibility: string
          visible_to_member_category_ids: string[] | null
          visible_to_member_ids: string[] | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          file_name: string
          file_path: string
          file_size_bytes?: number | null
          file_type?: string | null
          group_id: string
          id?: string
          shared_with_category_ids?: string[] | null
          shared_with_member_ids?: string[] | null
          updated_at?: string
          uploaded_at?: string
          uploader_user_id?: string | null
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Update: {
          created_at?: string
          description?: string | null
          file_name?: string
          file_path?: string
          file_size_bytes?: number | null
          file_type?: string | null
          group_id?: string
          id?: string
          shared_with_category_ids?: string[] | null
          shared_with_member_ids?: string[] | null
          updated_at?: string
          uploaded_at?: string
          uploader_user_id?: string | null
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "shared_files_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "care_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      sleep_diary_entries: {
        Row: {
          created_at: string
          dreams_notes: string | null
          entry_date: string
          id: string
          post_sleep_feelings: string | null
          pre_sleep_thoughts: string | null
          sleep_duration_hours: number | null
          sleep_quality: number | null
          time_to_bed: string | null
          time_woken_up: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          dreams_notes?: string | null
          entry_date?: string
          id?: string
          post_sleep_feelings?: string | null
          pre_sleep_thoughts?: string | null
          sleep_duration_hours?: number | null
          sleep_quality?: number | null
          time_to_bed?: string | null
          time_woken_up?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          dreams_notes?: string | null
          entry_date?: string
          id?: string
          post_sleep_feelings?: string | null
          pre_sleep_thoughts?: string | null
          sleep_duration_hours?: number | null
          sleep_quality?: number | null
          time_to_bed?: string | null
          time_woken_up?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sleep_entries: {
        Row: {
          awakenings: number | null
          bedtime: string
          created_at: string
          entry_date: string
          id: string
          notes: string | null
          sleep_duration_minutes: number | null
          sleep_quality: string
          time_to_fall_alleep_minutes: number | null
          user_id: string
          wake_up_time: string
        }
        Insert: {
          awakenings?: number | null
          bedtime: string
          created_at?: string
          entry_date: string
          id?: string
          notes?: string | null
          sleep_duration_minutes?: number | null
          sleep_quality: string
          time_to_fall_alleep_minutes?: number | null
          user_id: string
          wake_up_time: string
        }
        Update: {
          awakenings?: number | null
          bedtime?: string
          created_at?: string
          entry_date?: string
          id?: string
          notes?: string | null
          sleep_duration_minutes?: number | null
          sleep_quality?: string
          time_to_fall_alleep_minutes?: number | null
          user_id?: string
          wake_up_time?: string
        }
        Relationships: []
      }
      sleep_logs: {
        Row: {
          alcohol_drinks: number | null
          awake_sleep_percentage: number | null
          bed_time: string
          caffeine_mg: number | null
          created_at: string | null
          date: string
          deep_sleep_percentage: number | null
          end_time: string | null
          exercise_minutes: number | null
          id: string
          is_night_shift_sleep: boolean | null
          light_sleep_percentage: number | null
          mood_rating: number | null
          night_wakings: number | null
          notes: string | null
          pre_sleep_notes: string | null
          quality_score: number | null
          recovery_score: number | null
          rem_sleep_percentage: number | null
          room_brightness: number | null
          room_noise_level: number | null
          room_temperature: number | null
          screen_time_minutes: number | null
          sleep_disruptions: string[] | null
          sleep_duration_minutes: number
          sleep_efficiency: number | null
          sleep_factors: string[] | null
          sleep_quality: number
          start_time: string | null
          stress_level: number | null
          time_to_fall_asleep: number | null
          total_sleep_cycles: number | null
          updated_at: string | null
          user_id: string | null
          wake_time: string
        }
        Insert: {
          alcohol_drinks?: number | null
          awake_sleep_percentage?: number | null
          bed_time: string
          caffeine_mg?: number | null
          created_at?: string | null
          date: string
          deep_sleep_percentage?: number | null
          end_time?: string | null
          exercise_minutes?: number | null
          id?: string
          is_night_shift_sleep?: boolean | null
          light_sleep_percentage?: number | null
          mood_rating?: number | null
          night_wakings?: number | null
          notes?: string | null
          pre_sleep_notes?: string | null
          quality_score?: number | null
          recovery_score?: number | null
          rem_sleep_percentage?: number | null
          room_brightness?: number | null
          room_noise_level?: number | null
          room_temperature?: number | null
          screen_time_minutes?: number | null
          sleep_disruptions?: string[] | null
          sleep_duration_minutes: number
          sleep_efficiency?: number | null
          sleep_factors?: string[] | null
          sleep_quality: number
          start_time?: string | null
          stress_level?: number | null
          time_to_fall_asleep?: number | null
          total_sleep_cycles?: number | null
          updated_at?: string | null
          user_id?: string | null
          wake_time: string
        }
        Update: {
          alcohol_drinks?: number | null
          awake_sleep_percentage?: number | null
          bed_time?: string
          caffeine_mg?: number | null
          created_at?: string | null
          date?: string
          deep_sleep_percentage?: number | null
          end_time?: string | null
          exercise_minutes?: number | null
          id?: string
          is_night_shift_sleep?: boolean | null
          light_sleep_percentage?: number | null
          mood_rating?: number | null
          night_wakings?: number | null
          notes?: string | null
          pre_sleep_notes?: string | null
          quality_score?: number | null
          recovery_score?: number | null
          rem_sleep_percentage?: number | null
          room_brightness?: number | null
          room_noise_level?: number | null
          room_temperature?: number | null
          screen_time_minutes?: number | null
          sleep_disruptions?: string[] | null
          sleep_duration_minutes?: number
          sleep_efficiency?: number | null
          sleep_factors?: string[] | null
          sleep_quality?: number
          start_time?: string | null
          stress_level?: number | null
          time_to_fall_asleep?: number | null
          total_sleep_cycles?: number | null
          updated_at?: string | null
          user_id?: string | null
          wake_time?: string
        }
        Relationships: []
      }
      smokeless_product_reviews: {
        Row: {
          created_at: string | null
          id: string
          is_verified_purchase: boolean | null
          moderation_status:
            | Database["public"]["Enums"]["moderation_status"]
            | null
          product_id: string
          rating: number
          review_text: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_verified_purchase?: boolean | null
          moderation_status?:
            | Database["public"]["Enums"]["moderation_status"]
            | null
          product_id: string
          rating: number
          review_text?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_verified_purchase?: boolean | null
          moderation_status?:
            | Database["public"]["Enums"]["moderation_status"]
            | null
          product_id?: string
          rating?: number
          review_text?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "smokeless_product_reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "deprecated_smokeless_products"
            referencedColumns: ["id"]
          },
        ]
      }
      social_post_comments: {
        Row: {
          author_id: string
          content: string
          created_at: string
          id: string
          media_urls: string[] | null
          parent_comment_id: string | null
          post_id: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          id?: string
          media_urls?: string[] | null
          parent_comment_id?: string | null
          post_id: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          id?: string
          media_urls?: string[] | null
          parent_comment_id?: string | null
          post_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_post_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "social_post_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_post_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      social_post_reactions: {
        Row: {
          created_at: string
          id: string
          reaction_type: string
          social_post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          reaction_type: string
          social_post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          reaction_type?: string
          social_post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_social_post_reactions_profile_id"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_social_post_reactions_social_post_id"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      social_post_reactions_test: {
        Row: {
          another_col: string | null
          social_post_id: string
        }
        Insert: {
          another_col?: string | null
          social_post_id: string
        }
        Update: {
          another_col?: string | null
          social_post_id?: string
        }
        Relationships: []
      }
      social_post_visibility: {
        Row: {
          created_at: string
          id: string
          social_post_id: string
          target_group_id: string | null
          target_user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          social_post_id: string
          target_group_id?: string | null
          target_user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          social_post_id?: string
          target_group_id?: string | null
          target_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_post_visibility_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      social_posts: {
        Row: {
          author_id: string
          care_recipient_id: string | null
          category: string | null
          content: string
          created_at: string
          group_id: string
          id: string
          is_poll: boolean | null
          media_urls: string[] | null
          pinned: boolean
          poll_data: Json | null
          post_category: string | null
          subgroup_id: string | null
          title: string | null
          updated_at: string
          visibility: string
          visible_to_member_category_ids: string[] | null
          visible_to_member_ids: string[] | null
        }
        Insert: {
          author_id: string
          care_recipient_id?: string | null
          category?: string | null
          content: string
          created_at?: string
          group_id: string
          id?: string
          is_poll?: boolean | null
          media_urls?: string[] | null
          pinned?: boolean
          poll_data?: Json | null
          post_category?: string | null
          subgroup_id?: string | null
          title?: string | null
          updated_at?: string
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Update: {
          author_id?: string
          care_recipient_id?: string | null
          category?: string | null
          content?: string
          created_at?: string
          group_id?: string
          id?: string
          is_poll?: boolean | null
          media_urls?: string[] | null
          pinned?: boolean
          poll_data?: Json | null
          post_category?: string | null
          subgroup_id?: string | null
          title?: string | null
          updated_at?: string
          visibility?: string
          visible_to_member_category_ids?: string[] | null
          visible_to_member_ids?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "social_posts_care_recipient_id_fkey"
            columns: ["care_recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_posts_subgroup_id_fkey"
            columns: ["subgroup_id"]
            isOneToOne: false
            referencedRelation: "care_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      spatial_ref_sys: {
        Row: {
          auth_name: string | null
          auth_srid: number | null
          proj4text: string | null
          srid: number
          srtext: string | null
        }
        Insert: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid: number
          srtext?: string | null
        }
        Update: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid?: number
          srtext?: string | null
        }
        Relationships: []
      }
      status_update_attachments: {
        Row: {
          created_at: string
          file_url: string | null
          id: string
          link_url: string | null
          name: string
          status_update_id: string
          type: string
          uploader_id: string | null
        }
        Insert: {
          created_at?: string
          file_url?: string | null
          id?: string
          link_url?: string | null
          name: string
          status_update_id: string
          type: string
          uploader_id?: string | null
        }
        Update: {
          created_at?: string
          file_url?: string | null
          id?: string
          link_url?: string | null
          name?: string
          status_update_id?: string
          type?: string
          uploader_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_status_update"
            columns: ["status_update_id"]
            isOneToOne: false
            referencedRelation: "care_recipient_status_updates"
            referencedColumns: ["id"]
          },
        ]
      }
      step_logs: {
        Row: {
          created_at: string | null
          date: string
          goal: number | null
          id: string
          steps: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          date: string
          goal?: number | null
          id?: string
          steps?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          date?: string
          goal?: number | null
          id?: string
          steps?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      step_rewards: {
        Row: {
          created_at: string
          date: string
          id: string
          points_earned: number
          steps: number
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          points_earned: number
          steps: number
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          points_earned?: number
          steps?: number
          user_id?: string
        }
        Relationships: []
      }
      substance_logs: {
        Row: {
          created_at: string
          id: string
          location: string | null
          mood_after: number | null
          mood_before: number | null
          notes: string | null
          plan_id: string | null
          quantity: number | null
          social_context: string | null
          substance_type: string
          unit_of_measure: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          location?: string | null
          mood_after?: number | null
          mood_before?: number | null
          notes?: string | null
          plan_id?: string | null
          quantity?: number | null
          social_context?: string | null
          substance_type: string
          unit_of_measure?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          location?: string | null
          mood_after?: number | null
          mood_before?: number | null
          notes?: string | null
          plan_id?: string | null
          quantity?: number | null
          social_context?: string | null
          substance_type?: string
          unit_of_measure?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "substance_logs_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "tapering_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      success_stories: {
        Row: {
          created_at: string
          id: string
          is_anonymous: boolean
          story_content: string
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_anonymous?: boolean
          story_content: string
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_anonymous?: boolean
          story_content?: string
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "success_stories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      success_story_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          parent_comment_id: string | null
          story_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          story_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          parent_comment_id?: string | null
          story_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "success_story_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "success_story_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "success_story_comments_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "success_stories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "success_story_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      success_story_likes: {
        Row: {
          created_at: string
          story_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          story_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          story_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "success_story_likes_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "success_stories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "success_story_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      support_sessions: {
        Row: {
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          host_id: string
          id: string
          is_private: boolean | null
          max_participants: number | null
          meeting_link: string | null
          session_date: string
          session_type: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          host_id: string
          id?: string
          is_private?: boolean | null
          max_participants?: number | null
          meeting_link?: string | null
          session_date: string
          session_type?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          host_id?: string
          id?: string
          is_private?: boolean | null
          max_participants?: number | null
          meeting_link?: string | null
          session_date?: string
          session_type?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          color: string | null
          created_at: string
          created_by: string | null
          group_id: string
          id: string
          name: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          created_by?: string | null
          group_id: string
          id?: string
          name: string
        }
        Update: {
          color?: string | null
          created_at?: string
          created_by?: string | null
          group_id?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "tags_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tapering_plans: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          reduction_schedule: Json | null
          start_date: string
          starting_dose: number
          substance: string
          target_date: string
          target_dose: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          reduction_schedule?: Json | null
          start_date: string
          starting_dose: number
          substance: string
          target_date: string
          target_dose: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          reduction_schedule?: Json | null
          start_date?: string
          starting_dose?: number
          substance?: string
          target_date?: string
          target_dose?: number
          user_id?: string
        }
        Relationships: []
      }
      task_attachments: {
        Row: {
          file_type: string | null
          file_url: string | null
          id: string
          link_url: string | null
          name: string
          storage_path: string | null
          task_id: string
          type: string
          uploaded_at: string
          uploader_id: string
        }
        Insert: {
          file_type?: string | null
          file_url?: string | null
          id?: string
          link_url?: string | null
          name: string
          storage_path?: string | null
          task_id: string
          type: string
          uploaded_at?: string
          uploader_id: string
        }
        Update: {
          file_type?: string | null
          file_url?: string | null
          id?: string
          link_url?: string | null
          name?: string
          storage_path?: string | null
          task_id?: string
          type?: string
          uploaded_at?: string
          uploader_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_attachments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_attachments_uploader_id_fkey"
            columns: ["uploader_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      task_comments: {
        Row: {
          comment_text: string
          created_at: string
          id: string
          mentioned_user_ids: string[] | null
          parent_comment_id: string | null
          task_id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          comment_text: string
          created_at?: string
          id?: string
          mentioned_user_ids?: string[] | null
          parent_comment_id?: string | null
          task_id: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          comment_text?: string
          created_at?: string
          id?: string
          mentioned_user_ids?: string[] | null
          parent_comment_id?: string | null
          task_id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "task_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_comments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      task_dependencies: {
        Row: {
          created_at: string | null
          depends_on_task_id: string
          id: string
          task_id: string
        }
        Insert: {
          created_at?: string | null
          depends_on_task_id: string
          id?: string
          task_id: string
        }
        Update: {
          created_at?: string | null
          depends_on_task_id?: string
          id?: string
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_dependencies_depends_on_task_id_fkey"
            columns: ["depends_on_task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_dependencies_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      task_history: {
        Row: {
          action_timestamp: string
          action_type: string
          actor_profile_id: string | null
          change_details: Json | null
          id: string
          task_id: string
        }
        Insert: {
          action_timestamp?: string
          action_type: string
          actor_profile_id?: string | null
          change_details?: Json | null
          id?: string
          task_id: string
        }
        Update: {
          action_timestamp?: string
          action_type?: string
          actor_profile_id?: string | null
          change_details?: Json | null
          id?: string
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_history_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_history_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      task_tags: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          tag_id: string
          task_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          tag_id: string
          task_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          tag_id?: string
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_tags_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_tags_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "care_group_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          completed_at: string | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          is_completed: boolean | null
          list_id: string | null
          priority: number | null
          status_order_index: number
          subtasks: Json | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          list_id?: string | null
          priority?: number | null
          status_order_index?: number
          subtasks?: Json | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          list_id?: string | null
          priority?: number | null
          status_order_index?: number
          subtasks?: Json | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      team_members: {
        Row: {
          id: string
          joined_at: string
          role: Database["public"]["Enums"]["team_member_role"]
          team_id: string
          user_id: string
        }
        Insert: {
          id?: string
          joined_at?: string
          role?: Database["public"]["Enums"]["team_member_role"]
          team_id: string
          user_id: string
        }
        Update: {
          id?: string
          joined_at?: string
          role?: Database["public"]["Enums"]["team_member_role"]
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          owner_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          owner_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          app_name: string | null
          author: string
          created_at: string
          id: string
          quote: string
          title: string | null
        }
        Insert: {
          app_name?: string | null
          author: string
          created_at?: string
          id?: string
          quote: string
          title?: string | null
        }
        Update: {
          app_name?: string | null
          author?: string
          created_at?: string
          id?: string
          quote?: string
          title?: string | null
        }
        Relationships: []
      }
      threads: {
        Row: {
          author_id: string | null
          created_at: string | null
          forum_id: string | null
          id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          created_at?: string | null
          forum_id?: string | null
          id?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          created_at?: string | null
          forum_id?: string | null
          id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "threads_forum_id_fkey"
            columns: ["forum_id"]
            isOneToOne: false
            referencedRelation: "forums"
            referencedColumns: ["id"]
          },
        ]
      }
      todos: {
        Row: {
          created_at: string
          details: string | null
          due_date: string | null
          id: string
          is_completed: boolean
          parent_id: string | null
          priority: number
          sort_order: number | null
          tags: string[] | null
          task: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          details?: string | null
          due_date?: string | null
          id?: string
          is_completed?: boolean
          parent_id?: string | null
          priority?: number
          sort_order?: number | null
          tags?: string[] | null
          task: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          details?: string | null
          due_date?: string | null
          id?: string
          is_completed?: boolean
          parent_id?: string | null
          priority?: number
          sort_order?: number | null
          tags?: string[] | null
          task?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "todos_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "todos"
            referencedColumns: ["id"]
          },
        ]
      }
      trigger_patterns: {
        Row: {
          created_at: string | null
          id: string
          location_patterns: string[] | null
          time_patterns: Json | null
          trigger_type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          location_patterns?: string[] | null
          time_patterns?: Json | null
          trigger_type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          location_patterns?: string[] | null
          time_patterns?: Json | null
          trigger_type?: string
          user_id?: string
        }
        Relationships: []
      }
      triggers: {
        Row: {
          category: string | null
          coping_strategy: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          trigger_type: string | null
          user_id: string
        }
        Insert: {
          category?: string | null
          coping_strategy?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          trigger_type?: string | null
          user_id: string
        }
        Update: {
          category?: string | null
          coping_strategy?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          trigger_type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_achievement_progress: {
        Row: {
          achievement_id: string
          created_at: string | null
          progress: number
          unlocked: boolean
          unlocked_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          achievement_id: string
          created_at?: string | null
          progress?: number
          unlocked?: boolean
          unlocked_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          achievement_id?: string
          created_at?: string | null
          progress?: number
          unlocked?: boolean
          unlocked_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievement_progress_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      user_achievements: {
        Row: {
          achievement_id: string | null
          created_at: string | null
          earned_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          achievement_id?: string | null
          created_at?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          achievement_id?: string | null
          created_at?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievement_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      user_blocked_urls: {
        Row: {
          created_at: string
          id: string
          url_pattern: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          url_pattern: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          url_pattern?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_content_preferences: {
        Row: {
          age_verified: boolean | null
          created_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          age_verified?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          age_verified?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_custom_techniques: {
        Row: {
          created_at: string
          exhale_duration: number
          hold1_duration: number
          hold2_duration: number
          id: string
          inhale_duration: number
          name: string
          rounds: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          exhale_duration: number
          hold1_duration: number
          hold2_duration: number
          id?: string
          inhale_duration: number
          name: string
          rounds: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          exhale_duration?: number
          hold1_duration?: number
          hold2_duration?: number
          id?: string
          inhale_duration?: number
          name?: string
          rounds?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_favorite_meditations: {
        Row: {
          created_at: string
          meditation_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          meditation_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          meditation_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorite_meditations_meditation_id_fkey"
            columns: ["meditation_id"]
            isOneToOne: false
            referencedRelation: "meditations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_favorites: {
        Row: {
          created_at: string | null
          id: string
          technique_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          technique_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          technique_id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_gamification_stats: {
        Row: {
          created_at: string
          current_level: number
          current_points: number
          current_streak: number
          last_streak_check_date: string | null
          longest_streak: number
          tool_usage_count: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_level?: number
          current_points?: number
          current_streak?: number
          last_streak_check_date?: string | null
          longest_streak?: number
          tool_usage_count?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_level?: number
          current_points?: number
          current_streak?: number
          last_streak_check_date?: string | null
          longest_streak?: number
          tool_usage_count?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_goals: {
        Row: {
          created_at: string
          daily_step_goal: number | null
          fella_control_cost_per_drink: number | null
          fella_control_product_type: string | null
          fella_control_reduction_target_percent: number | null
          fella_control_typical_daily_drinks: number | null
          goal_type: string
          id: string
          method: string
          method_details: Json | null
          moderation_start_date: string | null
          motivation: string | null
          quit_date: string | null
          reduction_target_percent: number | null
          status: string
          timeline_days: number | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          daily_step_goal?: number | null
          fella_control_cost_per_drink?: number | null
          fella_control_product_type?: string | null
          fella_control_reduction_target_percent?: number | null
          fella_control_typical_daily_drinks?: number | null
          goal_type: string
          id?: string
          method: string
          method_details?: Json | null
          moderation_start_date?: string | null
          motivation?: string | null
          quit_date?: string | null
          reduction_target_percent?: number | null
          status?: string
          timeline_days?: number | null
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          daily_step_goal?: number | null
          fella_control_cost_per_drink?: number | null
          fella_control_product_type?: string | null
          fella_control_reduction_target_percent?: number | null
          fella_control_typical_daily_drinks?: number | null
          goal_type?: string
          id?: string
          method?: string
          method_details?: Json | null
          moderation_start_date?: string | null
          motivation?: string | null
          quit_date?: string | null
          reduction_target_percent?: number | null
          status?: string
          timeline_days?: number | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_group_activity_status: {
        Row: {
          created_at: string
          group_id: string
          id: string
          last_viewed_calendar_at: string | null
          last_viewed_contacts_at: string | null
          last_viewed_dashboard_at: string | null
          last_viewed_discussion_at: string | null
          last_viewed_files_at: string | null
          last_viewed_medications_at: string | null
          last_viewed_members_at: string | null
          last_viewed_notes_at: string | null
          last_viewed_support_at: string | null
          last_viewed_tasks_at: string | null
          last_viewed_updates_at: string | null
          last_viewed_well_wishes_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          group_id: string
          id?: string
          last_viewed_calendar_at?: string | null
          last_viewed_contacts_at?: string | null
          last_viewed_dashboard_at?: string | null
          last_viewed_discussion_at?: string | null
          last_viewed_files_at?: string | null
          last_viewed_medications_at?: string | null
          last_viewed_members_at?: string | null
          last_viewed_notes_at?: string | null
          last_viewed_support_at?: string | null
          last_viewed_tasks_at?: string | null
          last_viewed_updates_at?: string | null
          last_viewed_well_wishes_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          group_id?: string
          id?: string
          last_viewed_calendar_at?: string | null
          last_viewed_contacts_at?: string | null
          last_viewed_dashboard_at?: string | null
          last_viewed_discussion_at?: string | null
          last_viewed_files_at?: string | null
          last_viewed_medications_at?: string | null
          last_viewed_members_at?: string | null
          last_viewed_notes_at?: string | null
          last_viewed_support_at?: string | null
          last_viewed_tasks_at?: string | null
          last_viewed_updates_at?: string | null
          last_viewed_well_wishes_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_group_activity_status_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_pinned_groups: {
        Row: {
          group_id: string
          id: string
          pinned_at: string
          user_id: string
        }
        Insert: {
          group_id: string
          id?: string
          pinned_at?: string
          user_id: string
        }
        Update: {
          group_id?: string
          id?: string
          pinned_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_pinned_groups_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_points: {
        Row: {
          current_points: number | null
          last_updated: string | null
          user_id: string
        }
        Insert: {
          current_points?: number | null
          last_updated?: string | null
          user_id: string
        }
        Update: {
          current_points?: number | null
          last_updated?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          ai_gentleness_preference: number | null
          allow_data_collection: boolean | null
          created_at: string | null
          dashboard_widgets: string[] | null
          data_units: string | null
          enable_animations: boolean | null
          enable_sounds: boolean | null
          id: string
          language: string | null
          notification_cravings: boolean | null
          notification_logs: boolean | null
          notification_milestones: boolean | null
          preferred_ai_salutation: string | null
          share_activity: boolean | null
          show_online_status: boolean | null
          show_profile: boolean | null
          theme: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          ai_gentleness_preference?: number | null
          allow_data_collection?: boolean | null
          created_at?: string | null
          dashboard_widgets?: string[] | null
          data_units?: string | null
          enable_animations?: boolean | null
          enable_sounds?: boolean | null
          id?: string
          language?: string | null
          notification_cravings?: boolean | null
          notification_logs?: boolean | null
          notification_milestones?: boolean | null
          preferred_ai_salutation?: string | null
          share_activity?: boolean | null
          show_online_status?: boolean | null
          show_profile?: boolean | null
          theme?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          ai_gentleness_preference?: number | null
          allow_data_collection?: boolean | null
          created_at?: string | null
          dashboard_widgets?: string[] | null
          data_units?: string | null
          enable_animations?: boolean | null
          enable_sounds?: boolean | null
          id?: string
          language?: string | null
          notification_cravings?: boolean | null
          notification_logs?: boolean | null
          notification_milestones?: boolean | null
          preferred_ai_salutation?: string | null
          share_activity?: boolean | null
          show_online_status?: boolean | null
          show_profile?: boolean | null
          theme?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_profile_settings: {
        Row: {
          ai_gentleness_preference_fella_quit: number | null
          ai_salutation_fella_quit: string | null
          created_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_gentleness_preference_fella_quit?: number | null
          ai_salutation_fella_quit?: string | null
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_gentleness_preference_fella_quit?: number | null
          ai_salutation_fella_quit?: string | null
          created_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          ai_gentleness: number | null
          ai_nickname: string | null
          ai_user_nickname: string | null
          ai_user_title: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          date_of_birth: string | null
          full_name: string | null
          id: string
          is_caregiver: boolean | null
          is_checkiner: boolean | null
          is_companion: boolean | null
          is_professional: boolean | null
          location: string | null
          pomodoro_focus_duration: number | null
          pomodoro_long_break_duration: number | null
          pomodoro_short_break_duration: number | null
          professional_details: Json | null
          pronouns: string | null
          updated_at: string
          username: string | null
        }
        Insert: {
          ai_gentleness?: number | null
          ai_nickname?: string | null
          ai_user_nickname?: string | null
          ai_user_title?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          date_of_birth?: string | null
          full_name?: string | null
          id: string
          is_caregiver?: boolean | null
          is_checkiner?: boolean | null
          is_companion?: boolean | null
          is_professional?: boolean | null
          location?: string | null
          pomodoro_focus_duration?: number | null
          pomodoro_long_break_duration?: number | null
          pomodoro_short_break_duration?: number | null
          professional_details?: Json | null
          pronouns?: string | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          ai_gentleness?: number | null
          ai_nickname?: string | null
          ai_user_nickname?: string | null
          ai_user_title?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          date_of_birth?: string | null
          full_name?: string | null
          id?: string
          is_caregiver?: boolean | null
          is_checkiner?: boolean | null
          is_companion?: boolean | null
          is_professional?: boolean | null
          location?: string | null
          pomodoro_focus_duration?: number | null
          pomodoro_long_break_duration?: number | null
          pomodoro_short_break_duration?: number | null
          professional_details?: Json | null
          pronouns?: string | null
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      user_program_progress: {
        Row: {
          completed_at: string | null
          last_completed_step_number: number
          program_id: string
          started_at: string | null
          status: Database["public"]["Enums"]["program_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          last_completed_step_number?: number
          program_id: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["program_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          last_completed_step_number?: number
          program_id?: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["program_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_program_progress_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      user_rewards: {
        Row: {
          id: string
          redeemed_at: string | null
          reward_id: string
          user_id: string
        }
        Insert: {
          id?: string
          redeemed_at?: string | null
          reward_id: string
          user_id: string
        }
        Update: {
          id?: string
          redeemed_at?: string | null
          reward_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_rewards_reward_id_fkey"
            columns: ["reward_id"]
            isOneToOne: false
            referencedRelation: "rewards_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      user_settings: {
        Row: {
          ai_gentleness: number | null
          ai_greeting_name: string | null
          created_at: string
          daily_alcohol_goal_g: number | null
          daily_caffeine_goal_mg: number | null
          daily_calories_goal: number | null
          daily_water_goal_ml: number | null
          notifications_enabled: boolean | null
          theme: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_gentleness?: number | null
          ai_greeting_name?: string | null
          created_at?: string
          daily_alcohol_goal_g?: number | null
          daily_caffeine_goal_mg?: number | null
          daily_calories_goal?: number | null
          daily_water_goal_ml?: number | null
          notifications_enabled?: boolean | null
          theme?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_gentleness?: number | null
          ai_greeting_name?: string | null
          created_at?: string
          daily_alcohol_goal_g?: number | null
          daily_caffeine_goal_mg?: number | null
          daily_calories_goal?: number | null
          daily_water_goal_ml?: number | null
          notifications_enabled?: boolean | null
          theme?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_slip_logs: {
        Row: {
          created_at: string
          date: string
          id: string
          slip_up_entries: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          slip_up_entries?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          slip_up_entries?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_tasks: {
        Row: {
          actual_minutes: number | null
          category: string | null
          created_at: string
          description: string | null
          due_date: string | null
          estimated_minutes: number | null
          id: string
          is_complete: boolean | null
          parent_task_id: string | null
          priority: string
          project_id: string | null
          status: string
          status_order_index: number
          subtask_order: number | null
          team_id: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          actual_minutes?: number | null
          category?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          estimated_minutes?: number | null
          id?: string
          is_complete?: boolean | null
          parent_task_id?: string | null
          priority?: string
          project_id?: string | null
          status?: string
          status_order_index?: number
          subtask_order?: number | null
          team_id?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          actual_minutes?: number | null
          category?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          estimated_minutes?: number | null
          id?: string
          is_complete?: boolean | null
          parent_task_id?: string | null
          priority?: string
          project_id?: string | null
          status?: string
          status_order_index?: number
          subtask_order?: number | null
          team_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_tasks_parent_task_id_fkey"
            columns: ["parent_task_id"]
            isOneToOne: false
            referencedRelation: "user_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_tasks_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      user_tool_usages: {
        Row: {
          created_at: string
          id: number
          metadata: Json | null
          tool_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          metadata?: Json | null
          tool_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          metadata?: Json | null
          tool_id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_trigger_strategy_map: {
        Row: {
          created_at: string
          effectiveness_rating: number | null
          id: string
          notes: string | null
          strategy_id: string
          trigger_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          effectiveness_rating?: number | null
          id?: string
          notes?: string | null
          strategy_id: string
          trigger_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          effectiveness_rating?: number | null
          id?: string
          notes?: string | null
          strategy_id?: string
          trigger_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_trigger_strategy_map_strategy_id_fkey"
            columns: ["strategy_id"]
            isOneToOne: false
            referencedRelation: "coping_strategies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_trigger_strategy_map_trigger_id_fkey"
            columns: ["trigger_id"]
            isOneToOne: false
            referencedRelation: "triggers"
            referencedColumns: ["id"]
          },
        ]
      }
      web_tools: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          published: boolean | null
          route: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          published?: boolean | null
          route: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          published?: boolean | null
          route?: string
          updated_at?: string
        }
        Relationships: []
      }
      withdrawal_symptoms: {
        Row: {
          coping_methods: string[] | null
          created_at: string | null
          duration_hours: number | null
          id: string
          intensity: number
          notes: string | null
          symptom_type: string
          user_id: string
        }
        Insert: {
          coping_methods?: string[] | null
          created_at?: string | null
          duration_hours?: number | null
          id?: string
          intensity: number
          notes?: string | null
          symptom_type: string
          user_id: string
        }
        Update: {
          coping_methods?: string[] | null
          created_at?: string | null
          duration_hours?: number | null
          id?: string
          intensity?: number
          notes?: string | null
          symptom_type?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      daily_craving_analysis: {
        Row: {
          avg_intensity: number | null
          coping_mechanisms: string[] | null
          date: string | null
          triggers: string[] | null
          user_id: string | null
        }
        Relationships: []
      }
      daily_holistic_metrics: {
        Row: {
          avg_energy: number | null
          avg_focus: number | null
          avg_mood: number | null
          avg_sleep_hours: number | null
          avg_sleep_quality: number | null
          date: string | null
          user_id: string | null
        }
        Relationships: []
      }
      deprecated_daily_nicotine_use_view: {
        Row: {
          date: string | null
          product_type: string | null
          total_quantity: number | null
          user_id: string | null
        }
        Relationships: []
      }
      geography_columns: {
        Row: {
          coord_dimension: number | null
          f_geography_column: unknown | null
          f_table_catalog: unknown | null
          f_table_name: unknown | null
          f_table_schema: unknown | null
          srid: number | null
          type: string | null
        }
        Relationships: []
      }
      geometry_columns: {
        Row: {
          coord_dimension: number | null
          f_geometry_column: unknown | null
          f_table_catalog: string | null
          f_table_name: unknown | null
          f_table_schema: unknown | null
          srid: number | null
          type: string | null
        }
        Insert: {
          coord_dimension?: number | null
          f_geometry_column?: unknown | null
          f_table_catalog?: string | null
          f_table_name?: unknown | null
          f_table_schema?: unknown | null
          srid?: number | null
          type?: string | null
        }
        Update: {
          coord_dimension?: number | null
          f_geometry_column?: unknown | null
          f_table_catalog?: string | null
          f_table_name?: unknown | null
          f_table_schema?: unknown | null
          srid?: number | null
          type?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      _postgis_deprecate: {
        Args: { oldname: string; newname: string; version: string }
        Returns: undefined
      }
      _postgis_index_extent: {
        Args: { tbl: unknown; col: string }
        Returns: unknown
      }
      _postgis_pgsql_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _postgis_scripts_pgsql_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _postgis_selectivity: {
        Args: { tbl: unknown; att_name: string; geom: unknown; mode?: string }
        Returns: number
      }
      _st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_bestsrid: {
        Args: { "": unknown }
        Returns: number
      }
      _st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_coveredby: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      _st_equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_intersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      _st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      _st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      _st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_pointoutside: {
        Args: { "": unknown }
        Returns: unknown
      }
      _st_sortablehash: {
        Args: { geom: unknown }
        Returns: number
      }
      _st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_voronoi: {
        Args: {
          g1: unknown
          clip?: unknown
          tolerance?: number
          return_polygons?: boolean
        }
        Returns: unknown
      }
      _st_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      addauth: {
        Args: { "": string }
        Returns: boolean
      }
      addgeometrycolumn: {
        Args:
          | {
              catalog_name: string
              schema_name: string
              table_name: string
              column_name: string
              new_srid_in: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
          | {
              schema_name: string
              table_name: string
              column_name: string
              new_srid: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
          | {
              table_name: string
              column_name: string
              new_srid: number
              new_type: string
              new_dim: number
              use_typmod?: boolean
            }
        Returns: string
      }
      are_users_in_same_care_group: {
        Args: { user1_id: string; user2_id: string }
        Returns: boolean
      }
      award_points: {
        Args: { p_user_id: string; p_points_amount: number }
        Returns: undefined
      }
      box: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box2d: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box2d_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2d_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2df_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box2df_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3d: {
        Args: { "": unknown } | { "": unknown }
        Returns: unknown
      }
      box3d_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3d_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      box3dtobox: {
        Args: { "": unknown }
        Returns: unknown
      }
      bytea: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      check_and_award_streak_achievements: {
        Args: { p_user_id: string; p_current_streak: number }
        Returns: undefined
      }
      check_payment_access: {
        Args: { p_payment_id: string }
        Returns: boolean
      }
      check_users_share_care_group: {
        Args: { p_user_id_1: string; p_user_id_2: string }
        Returns: boolean
      }
      claim_fella_control_database_reward: {
        Args: {
          p_user_id: string
          p_reward_id: string
          p_points_to_deduct: number
        }
        Returns: {
          claimed_at: string
          created_at: string
          id: string
          notes: string | null
          points_redeemed: number
          reward_id: string | null
          status: string | null
          user_id: string
        }
      }
      claim_fella_control_tangible_reward: {
        Args: {
          p_user_id: string
          p_reward_id: string
          p_points_to_deduct: number
        }
        Returns: {
          claimed_at: string
          id: string
          points_redeemed: number
          reward_id: string
          status: string
          user_id: string
        }[]
      }
      clear_ad_blocking_stats: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      delete_comment: {
        Args: { comment_id: string }
        Returns: undefined
      }
      disablelongtransactions: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      dropgeometrycolumn: {
        Args:
          | {
              catalog_name: string
              schema_name: string
              table_name: string
              column_name: string
            }
          | { schema_name: string; table_name: string; column_name: string }
          | { table_name: string; column_name: string }
        Returns: string
      }
      dropgeometrytable: {
        Args:
          | { catalog_name: string; schema_name: string; table_name: string }
          | { schema_name: string; table_name: string }
          | { table_name: string }
        Returns: string
      }
      enablelongtransactions: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      ensure_update_updated_at_column_exists: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      fella_control_check_and_award_streak_achievements: {
        Args: { p_user_id: string; p_current_streak: number }
        Returns: {
          awarded_achievement_id: string
          awarded_name: string
          awarded_description: string
          awarded_points: number
        }[]
      }
      fella_control_get_user_streak: {
        Args: { p_user_id: string }
        Returns: {
          current_streak: number
          longest_streak: number
        }[]
      }
      fella_control_increment_user_points: {
        Args: { user_id_param: string; points_to_add: number }
        Returns: undefined
      }
      fella_control_update_user_streak: {
        Args: { p_user_id: string }
        Returns: number
      }
      generate_next_recurring_task: {
        Args: { task_id: string }
        Returns: undefined
      }
      geography: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      geography_analyze: {
        Args: { "": unknown }
        Returns: boolean
      }
      geography_gist_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_gist_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_send: {
        Args: { "": unknown }
        Returns: string
      }
      geography_spgist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geography_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      geography_typmod_out: {
        Args: { "": number }
        Returns: unknown
      }
      geometry: {
        Args:
          | { "": string }
          | { "": string }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
          | { "": unknown }
        Returns: unknown
      }
      geometry_above: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_analyze: {
        Args: { "": unknown }
        Returns: boolean
      }
      geometry_below: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_cmp: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_contained_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_distance_box: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_distance_centroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_eq: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_ge: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_gist_compress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_decompress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_decompress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_gist_sortsupport_2d: {
        Args: { "": unknown }
        Returns: undefined
      }
      geometry_gt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_hash: {
        Args: { "": unknown }
        Returns: number
      }
      geometry_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_le: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_left: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_lt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_overabove: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overbelow: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overleft: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overright: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_recv: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_right: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_send: {
        Args: { "": unknown }
        Returns: string
      }
      geometry_sortsupport: {
        Args: { "": unknown }
        Returns: undefined
      }
      geometry_spgist_compress_2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_spgist_compress_3d: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_spgist_compress_nd: {
        Args: { "": unknown }
        Returns: unknown
      }
      geometry_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      geometry_typmod_out: {
        Args: { "": number }
        Returns: unknown
      }
      geometry_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometrytype: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      geomfromewkb: {
        Args: { "": string }
        Returns: unknown
      }
      geomfromewkt: {
        Args: { "": string }
        Returns: unknown
      }
      get_direct_messages_for_conversation: {
        Args: {
          p_user_id1: string
          p_user_id2: string
          p_limit?: number
          p_offset?: number
        }
        Returns: {
          id: string
          sender_id: string
          receiver_id: string
          message_content: string
          attachments: Json
          read_at: string
          created_at: string
          updated_at: string
        }[]
      }
      get_fella_control_random_quote: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          quote_text: string
          author: string
        }[]
      }
      get_fella_quit_nearby_support_resources: {
        Args: {
          user_latitude: number
          user_longitude: number
          search_radius_meters?: number
          resource_types_filter?: string[]
          specialties_filter?: string[]
          limit_count?: number
        }
        Returns: {
          id: string
          created_at: string
          name: string
          description: string
          contact_info: Json
          address: string
          city: string
          state_province: string
          postal_code: string
          country: string
          latitude: number
          longitude: number
          location: unknown
          resource_type: string
          specialties: string[]
          operating_hours: Json
          is_online_resource: boolean
          target_audience: string
          cost_details: string
          languages_spoken: string[]
          accessibility_info: string
          verified: boolean
          last_verified_at: string
          added_by: string
          distance_meters: number
        }[]
      }
      get_latest_conversation_messages: {
        Args: { user_id: string }
        Returns: {
          conversation_id: string
          latest_message_content: string
          latest_message_created_at: string
        }[]
      }
      get_meal_timing_analytics: {
        Args: { p_user_id: string; p_start_date?: string; p_end_date?: string }
        Returns: Json
      }
      get_nearby_provider_ids: {
        Args: {
          search_lat: number
          search_lon: number
          search_radius_miles: number
        }
        Returns: {
          provider_id: string
        }[]
      }
      get_proj4_from_srid: {
        Args: { "": number }
        Returns: string
      }
      get_random_quote: {
        Args: Record<PropertyKey, never>
        Returns: {
          author: string | null
          created_at: string
          id: number
          quote_text: string
          tags: string[] | null
          updated_at: string
        }[]
      }
      get_relevant_care_notes_for_ai: {
        Args: {
          p_query: string
          p_care_recipient_id: string
          p_care_group_id: string
          p_user_id: string
          p_limit?: number
        }
        Returns: {
          id: string
          title: string
          content: string
          note_type: Database["public"]["Enums"]["care_note_type"]
          category: Database["public"]["Enums"]["care_note_category"]
          tags: string[]
          created_at: string
          relevance_score: number
        }[]
      }
      get_unread_message_counts_for_user: {
        Args: { p_user_id: string; p_conversation_ids: string[] }
        Returns: {
          conversation_id: string
          unread_count: number
        }[]
      }
      get_user_direct_message_conversations: {
        Args: { p_user_id: string }
        Returns: {
          conversation_partner_id: string
          conversation_partner_username: string
          last_message_content: string
          last_message_at: string
          unread_count: number
        }[]
      }
      get_user_role_in_group: {
        Args: { p_group_id: string; p_user_id: string }
        Returns: string
      }
      get_user_settings: {
        Args: { user_id_input: string }
        Returns: {
          id: string
          updated_at: string
          username: string
          full_name: string
          avatar_url: string
          website: string
          onboarding_completed: boolean
          daily_practice_reminder_time: string
          sound_effects_enabled: boolean
          background_music_volume: number
          selected_theme: string
          last_active_streak: number
          longest_streak: number
          current_streak: number
          ai_gentleness: number
          ai_user_nickname: string
        }[]
      }
      get_user_streak: {
        Args: { p_user_id: string }
        Returns: number
      }
      gettransactionid: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      gidx_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gidx_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      handle_exercise_log: {
        Args: { p_user_id: string; p_exercise_data: Json; p_operation?: string }
        Returns: Json
      }
      handle_food_log: {
        Args: { p_user_id: string; p_food_data: Json; p_operation?: string }
        Returns: Json
      }
      handle_mention_notifications: {
        Args: {
          p_content: string
          p_actor_id: string
          p_resource_id: string
          p_group_id: string
          p_notification_type: string
          p_content_preview_template?: string
        }
        Returns: undefined
      }
      has_care_group_role: {
        Args: { p_group_id: string; p_user_id: string; p_role_name: string }
        Returns: boolean
      }
      increment_template_usage: {
        Args: { template_id_input: string }
        Returns: {
          category: string | null
          content_json: Json
          cover_image_url: string | null
          created_at: string
          description: string | null
          id: string
          is_public: boolean
          name: string
          tags: string[] | null
          times_used: number
          updated_at: string
          user_id: string
        }[]
      }
      increment_user_points: {
        Args: { user_id_param: string; points_to_add: number }
        Returns: undefined
      }
      increment_version: {
        Args: { row_id: string }
        Returns: number
      }
      is_active_group_member: {
        Args: { group_id_to_check: string; user_id_to_check: string }
        Returns: boolean
      }
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
      is_admin_of_task_group: {
        Args: { p_task_id: string; p_user_id: string }
        Returns: boolean
      }
      is_care_group_admin: {
        Args: { p_group_id: string; p_user_id: string }
        Returns: boolean
      }
      is_care_group_admin_or_owner: {
        Args: { p_care_group_id: string; p_user_id: string }
        Returns: boolean
      }
      is_care_group_creator: {
        Args: { p_group_id: string; p_user_id: string }
        Returns: boolean
      }
      is_care_group_member: {
        Args: { p_group_id: string; p_user_id: string }
        Returns: boolean
      }
      is_care_group_public: {
        Args: { p_group_id: string }
        Returns: boolean
      }
      is_conversation_participant: {
        Args: { p_conversation_id: string; p_user_id: string }
        Returns: boolean
      }
      is_group_admin_or_creator: {
        Args: { p_group_id: string; p_user_id: string }
        Returns: boolean
      }
      is_group_admin_or_owner: {
        Args: { group_id_to_check: string; user_id_to_check: string }
        Returns: boolean
      }
      is_group_creator: {
        Args: { p_group_id: string; p_user_id: string }
        Returns: boolean
      }
      is_group_member: {
        Args: { p_group_id: string; p_user_id: string }
        Returns: boolean
      }
      is_member_of_any_of_my_subgroups: {
        Args: { p_user_id: string; p_target_subgroup_ids: string[] }
        Returns: boolean
      }
      is_member_of_task_group: {
        Args: { p_task_id: string; p_user_id: string }
        Returns: boolean
      }
      is_subgroup_admin: {
        Args: { subgroup_id_check: string; user_id_check: string }
        Returns: boolean
      }
      is_subgroup_member: {
        Args: { p_subgroup_id: string; p_user_id: string }
        Returns: boolean
      }
      is_user_in_member_categories: {
        Args: {
          p_group_id: string
          p_user_id: string
          p_category_ids: string[]
        }
        Returns: boolean
      }
      json: {
        Args: { "": unknown }
        Returns: Json
      }
      jsonb: {
        Args: { "": unknown }
        Returns: Json
      }
      longtransactionsenabled: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      mark_conversation_messages_as_read: {
        Args: { p_conversation_id: string; p_user_id: string }
        Returns: undefined
      }
      mark_direct_messages_as_read: {
        Args: { p_receiver_id: string; p_sender_id: string }
        Returns: undefined
      }
      moderate_review: {
        Args: { p_review_id: string; p_status: string; p_notes?: string }
        Returns: undefined
      }
      path: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_asflatgeobuf_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asgeobuf_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asmvt_finalfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_asmvt_serialfn: {
        Args: { "": unknown }
        Returns: string
      }
      pgis_geometry_clusterintersecting_finalfn: {
        Args: { "": unknown }
        Returns: unknown[]
      }
      pgis_geometry_clusterwithin_finalfn: {
        Args: { "": unknown }
        Returns: unknown[]
      }
      pgis_geometry_collect_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_makeline_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_polygonize_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_union_parallel_finalfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      pgis_geometry_union_parallel_serialfn: {
        Args: { "": unknown }
        Returns: string
      }
      point: {
        Args: { "": unknown }
        Returns: unknown
      }
      polygon: {
        Args: { "": unknown }
        Returns: unknown
      }
      populate_geometry_columns: {
        Args:
          | { tbl_oid: unknown; use_typmod?: boolean }
          | { use_typmod?: boolean }
        Returns: string
      }
      postgis_addbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_constraint_dims: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: number
      }
      postgis_constraint_srid: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: number
      }
      postgis_constraint_type: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string }
        Returns: string
      }
      postgis_dropbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_extensions_upgrade: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_full_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_geos_noop: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_geos_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_getbbox: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_hasbbox: {
        Args: { "": unknown }
        Returns: boolean
      }
      postgis_index_supportfn: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_lib_build_date: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_lib_revision: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_lib_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libjson_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_liblwgeom_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libprotobuf_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_libxml_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_noop: {
        Args: { "": unknown }
        Returns: unknown
      }
      postgis_proj_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_build_date: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_installed: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_scripts_released: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_svn_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_type_name: {
        Args: {
          geomname: string
          coord_dimension: number
          use_new_name?: boolean
        }
        Returns: string
      }
      postgis_typmod_dims: {
        Args: { "": number }
        Returns: number
      }
      postgis_typmod_srid: {
        Args: { "": number }
        Returns: number
      }
      postgis_typmod_type: {
        Args: { "": number }
        Returns: string
      }
      postgis_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      postgis_wagyu_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      redeem_reward: {
        Args: { p_user_id: string; p_reward_id: string; p_cost: number }
        Returns: undefined
      }
      search_caregivers_with_details: {
        Args:
          | { page_limit?: number; page_offset?: number }
          | {
              search_term?: string
              min_rate?: number
              max_rate?: number
              min_exp?: number
              has_check?: boolean
              sort_by_param?: string
              sort_asc?: boolean
              page_limit?: number
              page_offset?: number
            }
          | {
              search_term?: string
              p_service_ids?: number[]
              min_rate?: number
              max_rate?: number
              min_exp?: number
              has_check?: boolean
              p_available_on_days?: string[]
              sort_by_param?: string
              sort_asc?: boolean
              page_limit?: number
              page_offset?: number
            }
        Returns: {
          id: string
          created_at: string
          user_id: string
          bio: string
          hourly_rate: number
          years_of_experience: number
          background_check_completed: boolean
          auto_confirm_bookings: boolean
          auto_confirm_conditions: Json
          availability_json: Json
          background_check_status: boolean
          profiles: Json
        }[]
      }
      search_service_providers_by_distance: {
        Args: {
          search_latitude: number
          search_longitude: number
          search_radius_meters: number
          page_limit?: number
          page_offset?: number
        }
        Returns: {
          id: string
          distance_meters: number
          total_records: number
        }[]
      }
      spheroid_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      spheroid_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_3dclosestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3ddistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_3dlength: {
        Args: { "": unknown }
        Returns: number
      }
      st_3dlongestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmakebox: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmaxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dperimeter: {
        Args: { "": unknown }
        Returns: number
      }
      st_3dshortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_addpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_angle: {
        Args:
          | { line1: unknown; line2: unknown }
          | { pt1: unknown; pt2: unknown; pt3: unknown; pt4?: unknown }
        Returns: number
      }
      st_area: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_area2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_asbinary: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      st_asencodedpolyline: {
        Args: { geom: unknown; nprecision?: number }
        Returns: string
      }
      st_asewkb: {
        Args: { "": unknown }
        Returns: string
      }
      st_asewkt: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      st_asgeojson: {
        Args:
          | { "": string }
          | { geog: unknown; maxdecimaldigits?: number; options?: number }
          | { geom: unknown; maxdecimaldigits?: number; options?: number }
          | {
              r: Record<string, unknown>
              geom_column?: string
              maxdecimaldigits?: number
              pretty_bool?: boolean
            }
        Returns: string
      }
      st_asgml: {
        Args:
          | { "": string }
          | {
              geog: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
          | { geom: unknown; maxdecimaldigits?: number; options?: number }
          | {
              version: number
              geog: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
          | {
              version: number
              geom: unknown
              maxdecimaldigits?: number
              options?: number
              nprefix?: string
              id?: string
            }
        Returns: string
      }
      st_ashexewkb: {
        Args: { "": unknown }
        Returns: string
      }
      st_askml: {
        Args:
          | { "": string }
          | { geog: unknown; maxdecimaldigits?: number; nprefix?: string }
          | { geom: unknown; maxdecimaldigits?: number; nprefix?: string }
        Returns: string
      }
      st_aslatlontext: {
        Args: { geom: unknown; tmpl?: string }
        Returns: string
      }
      st_asmarc21: {
        Args: { geom: unknown; format?: string }
        Returns: string
      }
      st_asmvtgeom: {
        Args: {
          geom: unknown
          bounds: unknown
          extent?: number
          buffer?: number
          clip_geom?: boolean
        }
        Returns: unknown
      }
      st_assvg: {
        Args:
          | { "": string }
          | { geog: unknown; rel?: number; maxdecimaldigits?: number }
          | { geom: unknown; rel?: number; maxdecimaldigits?: number }
        Returns: string
      }
      st_astext: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      st_astwkb: {
        Args:
          | {
              geom: unknown[]
              ids: number[]
              prec?: number
              prec_z?: number
              prec_m?: number
              with_sizes?: boolean
              with_boxes?: boolean
            }
          | {
              geom: unknown
              prec?: number
              prec_z?: number
              prec_m?: number
              with_sizes?: boolean
              with_boxes?: boolean
            }
        Returns: string
      }
      st_asx3d: {
        Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
        Returns: string
      }
      st_azimuth: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_boundary: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_boundingdiagonal: {
        Args: { geom: unknown; fits?: boolean }
        Returns: unknown
      }
      st_buffer: {
        Args:
          | { geom: unknown; radius: number; options?: string }
          | { geom: unknown; radius: number; quadsegs: number }
        Returns: unknown
      }
      st_buildarea: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_centroid: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      st_cleangeometry: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_clipbybox2d: {
        Args: { geom: unknown; box: unknown }
        Returns: unknown
      }
      st_closestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_clusterintersecting: {
        Args: { "": unknown[] }
        Returns: unknown[]
      }
      st_collect: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_collectionextract: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_collectionhomogenize: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_concavehull: {
        Args: {
          param_geom: unknown
          param_pctconvex: number
          param_allow_holes?: boolean
        }
        Returns: unknown
      }
      st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_convexhull: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_coorddim: {
        Args: { geometry: unknown }
        Returns: number
      }
      st_coveredby: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_covers: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_curvetoline: {
        Args: { geom: unknown; tol?: number; toltype?: number; flags?: number }
        Returns: unknown
      }
      st_delaunaytriangles: {
        Args: { g1: unknown; tolerance?: number; flags?: number }
        Returns: unknown
      }
      st_difference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_dimension: {
        Args: { "": unknown }
        Returns: number
      }
      st_disjoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_distance: {
        Args:
          | { geog1: unknown; geog2: unknown; use_spheroid?: boolean }
          | { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_distancesphere: {
        Args:
          | { geom1: unknown; geom2: unknown }
          | { geom1: unknown; geom2: unknown; radius: number }
        Returns: number
      }
      st_distancespheroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_dump: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumppoints: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumprings: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dumpsegments: {
        Args: { "": unknown }
        Returns: Database["public"]["CompositeTypes"]["geometry_dump"][]
      }
      st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      st_endpoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_envelope: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_equals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_expand: {
        Args:
          | { box: unknown; dx: number; dy: number }
          | { box: unknown; dx: number; dy: number; dz?: number }
          | { geom: unknown; dx: number; dy: number; dz?: number; dm?: number }
        Returns: unknown
      }
      st_exteriorring: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_flipcoordinates: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_force2d: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_force3d: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force3dm: {
        Args: { geom: unknown; mvalue?: number }
        Returns: unknown
      }
      st_force3dz: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force4d: {
        Args: { geom: unknown; zvalue?: number; mvalue?: number }
        Returns: unknown
      }
      st_forcecollection: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcecurve: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcepolygonccw: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcepolygoncw: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcerhr: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_forcesfs: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_generatepoints: {
        Args:
          | { area: unknown; npoints: number }
          | { area: unknown; npoints: number; seed: number }
        Returns: unknown
      }
      st_geogfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geogfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geographyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geohash: {
        Args:
          | { geog: unknown; maxchars?: number }
          | { geom: unknown; maxchars?: number }
        Returns: string
      }
      st_geomcollfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomcollfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geometricmedian: {
        Args: {
          g: unknown
          tolerance?: number
          max_iter?: number
          fail_if_not_converged?: boolean
        }
        Returns: unknown
      }
      st_geometryfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geometrytype: {
        Args: { "": unknown }
        Returns: string
      }
      st_geomfromewkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromewkt: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromgeojson: {
        Args: { "": Json } | { "": Json } | { "": string }
        Returns: unknown
      }
      st_geomfromgml: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromkml: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfrommarc21: {
        Args: { marc21xml: string }
        Returns: unknown
      }
      st_geomfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromtwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_geomfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_gmltosql: {
        Args: { "": string }
        Returns: unknown
      }
      st_hasarc: {
        Args: { geometry: unknown }
        Returns: boolean
      }
      st_hausdorffdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_hexagon: {
        Args: { size: number; cell_i: number; cell_j: number; origin?: unknown }
        Returns: unknown
      }
      st_hexagongrid: {
        Args: { size: number; bounds: unknown }
        Returns: Record<string, unknown>[]
      }
      st_interpolatepoint: {
        Args: { line: unknown; point: unknown }
        Returns: number
      }
      st_intersection: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_intersects: {
        Args:
          | { geog1: unknown; geog2: unknown }
          | { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_isclosed: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_iscollection: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isempty: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_ispolygonccw: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_ispolygoncw: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isring: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_issimple: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isvalid: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_isvaliddetail: {
        Args: { geom: unknown; flags?: number }
        Returns: Database["public"]["CompositeTypes"]["valid_detail"]
      }
      st_isvalidreason: {
        Args: { "": unknown }
        Returns: string
      }
      st_isvalidtrajectory: {
        Args: { "": unknown }
        Returns: boolean
      }
      st_length: {
        Args:
          | { "": string }
          | { "": unknown }
          | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_length2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_letters: {
        Args: { letters: string; font?: Json }
        Returns: unknown
      }
      st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      st_linefromencodedpolyline: {
        Args: { txtin: string; nprecision?: number }
        Returns: unknown
      }
      st_linefrommultipoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_linefromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_linefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_linelocatepoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_linemerge: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_linestringfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_linetocurve: {
        Args: { geometry: unknown }
        Returns: unknown
      }
      st_locatealong: {
        Args: { geometry: unknown; measure: number; leftrightoffset?: number }
        Returns: unknown
      }
      st_locatebetween: {
        Args: {
          geometry: unknown
          frommeasure: number
          tomeasure: number
          leftrightoffset?: number
        }
        Returns: unknown
      }
      st_locatebetweenelevations: {
        Args: { geometry: unknown; fromelevation: number; toelevation: number }
        Returns: unknown
      }
      st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_m: {
        Args: { "": unknown }
        Returns: number
      }
      st_makebox2d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makeline: {
        Args: { "": unknown[] } | { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makepolygon: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_makevalid: {
        Args: { "": unknown } | { geom: unknown; params: string }
        Returns: unknown
      }
      st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_maximuminscribedcircle: {
        Args: { "": unknown }
        Returns: Record<string, unknown>
      }
      st_memsize: {
        Args: { "": unknown }
        Returns: number
      }
      st_minimumboundingcircle: {
        Args: { inputgeom: unknown; segs_per_quarter?: number }
        Returns: unknown
      }
      st_minimumboundingradius: {
        Args: { "": unknown }
        Returns: Record<string, unknown>
      }
      st_minimumclearance: {
        Args: { "": unknown }
        Returns: number
      }
      st_minimumclearanceline: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_mlinefromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mlinefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpolyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_mpolyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multi: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_multilinefromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multilinestringfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipolyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_multipolygonfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_ndims: {
        Args: { "": unknown }
        Returns: number
      }
      st_node: {
        Args: { g: unknown }
        Returns: unknown
      }
      st_normalize: {
        Args: { geom: unknown }
        Returns: unknown
      }
      st_npoints: {
        Args: { "": unknown }
        Returns: number
      }
      st_nrings: {
        Args: { "": unknown }
        Returns: number
      }
      st_numgeometries: {
        Args: { "": unknown }
        Returns: number
      }
      st_numinteriorring: {
        Args: { "": unknown }
        Returns: number
      }
      st_numinteriorrings: {
        Args: { "": unknown }
        Returns: number
      }
      st_numpatches: {
        Args: { "": unknown }
        Returns: number
      }
      st_numpoints: {
        Args: { "": unknown }
        Returns: number
      }
      st_offsetcurve: {
        Args: { line: unknown; distance: number; params?: string }
        Returns: unknown
      }
      st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_orientedenvelope: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_perimeter: {
        Args: { "": unknown } | { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_perimeter2d: {
        Args: { "": unknown }
        Returns: number
      }
      st_pointfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_pointfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_pointm: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          mcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_pointonsurface: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_points: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_pointz: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_pointzm: {
        Args: {
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
          mcoordinate: number
          srid?: number
        }
        Returns: unknown
      }
      st_polyfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_polyfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonfromtext: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonfromwkb: {
        Args: { "": string }
        Returns: unknown
      }
      st_polygonize: {
        Args: { "": unknown[] }
        Returns: unknown
      }
      st_project: {
        Args: { geog: unknown; distance: number; azimuth: number }
        Returns: unknown
      }
      st_quantizecoordinates: {
        Args: {
          g: unknown
          prec_x: number
          prec_y?: number
          prec_z?: number
          prec_m?: number
        }
        Returns: unknown
      }
      st_reduceprecision: {
        Args: { geom: unknown; gridsize: number }
        Returns: unknown
      }
      st_relate: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: string
      }
      st_removerepeatedpoints: {
        Args: { geom: unknown; tolerance?: number }
        Returns: unknown
      }
      st_reverse: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_segmentize: {
        Args: { geog: unknown; max_segment_length: number }
        Returns: unknown
      }
      st_setsrid: {
        Args: { geog: unknown; srid: number } | { geom: unknown; srid: number }
        Returns: unknown
      }
      st_sharedpaths: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_shiftlongitude: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_shortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_simplifypolygonhull: {
        Args: { geom: unknown; vertex_fraction: number; is_outer?: boolean }
        Returns: unknown
      }
      st_split: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_square: {
        Args: { size: number; cell_i: number; cell_j: number; origin?: unknown }
        Returns: unknown
      }
      st_squaregrid: {
        Args: { size: number; bounds: unknown }
        Returns: Record<string, unknown>[]
      }
      st_srid: {
        Args: { geog: unknown } | { geom: unknown }
        Returns: number
      }
      st_startpoint: {
        Args: { "": unknown }
        Returns: unknown
      }
      st_subdivide: {
        Args: { geom: unknown; maxvertices?: number; gridsize?: number }
        Returns: unknown[]
      }
      st_summary: {
        Args: { "": unknown } | { "": unknown }
        Returns: string
      }
      st_swapordinates: {
        Args: { geom: unknown; ords: unknown }
        Returns: unknown
      }
      st_symdifference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_symmetricdifference: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_tileenvelope: {
        Args: {
          zoom: number
          x: number
          y: number
          bounds?: unknown
          margin?: number
        }
        Returns: unknown
      }
      st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_transform: {
        Args:
          | { geom: unknown; from_proj: string; to_proj: string }
          | { geom: unknown; from_proj: string; to_srid: number }
          | { geom: unknown; to_proj: string }
        Returns: unknown
      }
      st_triangulatepolygon: {
        Args: { g1: unknown }
        Returns: unknown
      }
      st_union: {
        Args:
          | { "": unknown[] }
          | { geom1: unknown; geom2: unknown }
          | { geom1: unknown; geom2: unknown; gridsize: number }
        Returns: unknown
      }
      st_voronoilines: {
        Args: { g1: unknown; tolerance?: number; extend_to?: unknown }
        Returns: unknown
      }
      st_voronoipolygons: {
        Args: { g1: unknown; tolerance?: number; extend_to?: unknown }
        Returns: unknown
      }
      st_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_wkbtosql: {
        Args: { wkb: string }
        Returns: unknown
      }
      st_wkttosql: {
        Args: { "": string }
        Returns: unknown
      }
      st_wrapx: {
        Args: { geom: unknown; wrap: number; move: number }
        Returns: unknown
      }
      st_x: {
        Args: { "": unknown }
        Returns: number
      }
      st_xmax: {
        Args: { "": unknown }
        Returns: number
      }
      st_xmin: {
        Args: { "": unknown }
        Returns: number
      }
      st_y: {
        Args: { "": unknown }
        Returns: number
      }
      st_ymax: {
        Args: { "": unknown }
        Returns: number
      }
      st_ymin: {
        Args: { "": unknown }
        Returns: number
      }
      st_z: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmax: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmflag: {
        Args: { "": unknown }
        Returns: number
      }
      st_zmin: {
        Args: { "": unknown }
        Returns: number
      }
      suggest_care_note_augmentation: {
        Args: {
          p_fragmented_tip: string
          p_care_recipient_id: string
          p_care_group_id: string
        }
        Returns: Json
      }
      text: {
        Args: { "": unknown }
        Returns: string
      }
      unlockrows: {
        Args: { "": string }
        Returns: number
      }
      update_service_provider_ratings_and_count: {
        Args: { provider_id_param: string }
        Returns: undefined
      }
      updategeometrysrid: {
        Args: {
          catalogn_name: string
          schema_name: string
          table_name: string
          column_name: string
          new_srid_in: number
        }
        Returns: string
      }
    }
    Enums: {
      availability_type: "recurring" | "specific_date" | "unavailable"
      booking_status:
        | "pending_confirmation"
        | "confirmed"
        | "cancelled_by_user"
        | "cancelled_by_professional"
        | "completed"
        | "rescheduled"
      booking_status_companion:
        | "pending"
        | "confirmed"
        | "cancelled_by_user"
        | "cancelled_by_companion"
        | "completed"
        | "no_show_user"
        | "no_show_companion"
      booking_status_enum:
        | "pending"
        | "confirmed"
        | "cancelled"
        | "completed"
        | "rescheduled"
      business_type: "retail" | "online" | "hybrid"
      care_group_member_role:
        | "admin"
        | "member"
        | "editor"
        | "viewer"
        | "owner"
        | "coordinator"
        | "professional"
      care_group_role: "owner" | "admin" | "coordinator" | "member" | "viewer"
      care_note_category:
        | "Communication"
        | "Mobility"
        | "Nutrition"
        | "Medication"
        | "Personal Care"
        | "Safety"
        | "Engagement"
        | "Behavioral"
        | "Medical Appointment"
        | "Daily Routine"
        | "Other"
      care_note_type:
        | "General Note"
        | "Care Tip"
        | "Accompany Tip"
        | "Avoid List Item"
        | "Life Story Snippet"
        | "Medical Information"
        | "Emergency Protocol"
        | "Behavioral Insight"
        | "Topic Card"
        | "Reminiscence Material"
      care_note_visibility: "Group" | "SpecificMembers" | "OnlyMe"
      checkin_booking_status:
        | "pending_approval"
        | "confirmed"
        | "declined_by_professional"
        | "cancelled_by_requester"
        | "completed"
        | "missed"
      checkin_booking_type: "message" | "phone" | "in_person"
      checkin_frequency:
        | "once"
        | "daily"
        | "weekly"
        | "bi-weekly"
        | "monthly"
        | "custom"
      checkin_log_status:
        | "pending"
        | "completed"
        | "missed"
        | "failed"
        | "cancelled"
        | "in_progress"
      checkin_method:
        | "message"
        | "phone"
        | "in_person"
        | "ai_text"
        | "ai_speech"
        | "form"
        | "unknown"
      checkin_schedule_status: "active" | "paused" | "completed" | "cancelled"
      checkin_service_type: "message" | "phone" | "in_person"
      checkin_status:
        | "scheduled"
        | "pending_response"
        | "in_progress"
        | "completed"
        | "missed"
        | "cancelled"
      checkin_type: "manual_log" | "scheduled_prompt" | "ai_chat"
      checkin_type_enum:
        | "message"
        | "phone_call"
        | "in_person"
        | "ai_text"
        | "ai_speech"
      event_category_enum:
        | "appointment"
        | "medication"
        | "activity"
        | "visit"
        | "exercise"
        | "meal"
        | "social_gathering"
        | "therapy_session"
        | "personal_care"
        | "respite_care"
        | "group_meeting"
        | "education_workshop"
        | "volunteer_activity"
        | "important_deadline"
        | "other"
      moderation_status: "pending" | "approved" | "rejected"
      note_visibility_type:
        | "group"
        | "member_categories"
        | "members"
        | "public_in_group"
      palace_node_type: "text" | "image" | "link"
      payment_status: "unpaid" | "processing" | "paid" | "failed"
      program_status: "not_started" | "in_progress" | "completed"
      reaction_emoji: "👍" | "❤️" | "😂" | "😢" | "😠" | "😮"
      review_entity_type:
        | "user_profile"
        | "care_professional"
        | "care_facility"
        | "care_group"
      service_offering_type:
        | "consultation"
        | "assessment"
        | "therapy_session"
        | "care_planning"
        | "medication_review"
        | "insurance_guidance"
        | "legal_assistance"
        | "care_coordination"
        | "family_support"
        | "remote_monitoring"
        | "personal_care"
        | "meal_preparation"
        | "light_housekeeping"
        | "transportation"
        | "companionship"
        | "mobility_assistance"
        | "specialized_care_adhd"
        | "specialized_care_autism"
        | "specialized_care_dementia"
        | "overnight_care"
        | "respite_care"
        | "other"
      service_provider_type:
        | "professional"
        | "caregiver"
        | "companion"
        | "checkiner"
      subgroup_member_role: "admin" | "member" | "viewer"
      task_priority: "low" | "medium" | "high" | "urgent"
      task_status:
        | "pending"
        | "in_progress"
        | "completed"
        | "cancelled"
        | "on_hold"
      team_member_role: "admin" | "member" | "editor" | "viewer"
      user_role:
        | "user"
        | "admin"
        | "caregiver"
        | "companion"
        | "professional"
        | "care_recipient"
        | "facility_admin"
        | "pal_connector"
        | "care_advisor"
        | "insurance_advisor"
        | "care_lawyer"
        | "checkin_person"
    }
    CompositeTypes: {
      geometry_dump: {
        path: number[] | null
        geom: unknown | null
      }
      valid_detail: {
        valid: boolean | null
        reason: string | null
        location: unknown | null
      }
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      availability_type: ["recurring", "specific_date", "unavailable"],
      booking_status: [
        "pending_confirmation",
        "confirmed",
        "cancelled_by_user",
        "cancelled_by_professional",
        "completed",
        "rescheduled",
      ],
      booking_status_companion: [
        "pending",
        "confirmed",
        "cancelled_by_user",
        "cancelled_by_companion",
        "completed",
        "no_show_user",
        "no_show_companion",
      ],
      booking_status_enum: [
        "pending",
        "confirmed",
        "cancelled",
        "completed",
        "rescheduled",
      ],
      business_type: ["retail", "online", "hybrid"],
      care_group_member_role: [
        "admin",
        "member",
        "editor",
        "viewer",
        "owner",
        "coordinator",
        "professional",
      ],
      care_group_role: ["owner", "admin", "coordinator", "member", "viewer"],
      care_note_category: [
        "Communication",
        "Mobility",
        "Nutrition",
        "Medication",
        "Personal Care",
        "Safety",
        "Engagement",
        "Behavioral",
        "Medical Appointment",
        "Daily Routine",
        "Other",
      ],
      care_note_type: [
        "General Note",
        "Care Tip",
        "Accompany Tip",
        "Avoid List Item",
        "Life Story Snippet",
        "Medical Information",
        "Emergency Protocol",
        "Behavioral Insight",
        "Topic Card",
        "Reminiscence Material",
      ],
      care_note_visibility: ["Group", "SpecificMembers", "OnlyMe"],
      checkin_booking_status: [
        "pending_approval",
        "confirmed",
        "declined_by_professional",
        "cancelled_by_requester",
        "completed",
        "missed",
      ],
      checkin_booking_type: ["message", "phone", "in_person"],
      checkin_frequency: [
        "once",
        "daily",
        "weekly",
        "bi-weekly",
        "monthly",
        "custom",
      ],
      checkin_log_status: [
        "pending",
        "completed",
        "missed",
        "failed",
        "cancelled",
        "in_progress",
      ],
      checkin_method: [
        "message",
        "phone",
        "in_person",
        "ai_text",
        "ai_speech",
        "form",
        "unknown",
      ],
      checkin_schedule_status: ["active", "paused", "completed", "cancelled"],
      checkin_service_type: ["message", "phone", "in_person"],
      checkin_status: [
        "scheduled",
        "pending_response",
        "in_progress",
        "completed",
        "missed",
        "cancelled",
      ],
      checkin_type: ["manual_log", "scheduled_prompt", "ai_chat"],
      checkin_type_enum: [
        "message",
        "phone_call",
        "in_person",
        "ai_text",
        "ai_speech",
      ],
      event_category_enum: [
        "appointment",
        "medication",
        "activity",
        "visit",
        "exercise",
        "meal",
        "social_gathering",
        "therapy_session",
        "personal_care",
        "respite_care",
        "group_meeting",
        "education_workshop",
        "volunteer_activity",
        "important_deadline",
        "other",
      ],
      moderation_status: ["pending", "approved", "rejected"],
      note_visibility_type: [
        "group",
        "member_categories",
        "members",
        "public_in_group",
      ],
      palace_node_type: ["text", "image", "link"],
      payment_status: ["unpaid", "processing", "paid", "failed"],
      program_status: ["not_started", "in_progress", "completed"],
      reaction_emoji: ["👍", "❤️", "😂", "😢", "😠", "😮"],
      review_entity_type: [
        "user_profile",
        "care_professional",
        "care_facility",
        "care_group",
      ],
      service_offering_type: [
        "consultation",
        "assessment",
        "therapy_session",
        "care_planning",
        "medication_review",
        "insurance_guidance",
        "legal_assistance",
        "care_coordination",
        "family_support",
        "remote_monitoring",
        "personal_care",
        "meal_preparation",
        "light_housekeeping",
        "transportation",
        "companionship",
        "mobility_assistance",
        "specialized_care_adhd",
        "specialized_care_autism",
        "specialized_care_dementia",
        "overnight_care",
        "respite_care",
        "other",
      ],
      service_provider_type: [
        "professional",
        "caregiver",
        "companion",
        "checkiner",
      ],
      subgroup_member_role: ["admin", "member", "viewer"],
      task_priority: ["low", "medium", "high", "urgent"],
      task_status: [
        "pending",
        "in_progress",
        "completed",
        "cancelled",
        "on_hold",
      ],
      team_member_role: ["admin", "member", "editor", "viewer"],
      user_role: [
        "user",
        "admin",
        "caregiver",
        "companion",
        "professional",
        "care_recipient",
        "facility_admin",
        "pal_connector",
        "care_advisor",
        "insurance_advisor",
        "care_lawyer",
        "checkin_person",
      ],
    },
  },
} as const
