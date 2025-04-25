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
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          criteria: Json
          description: string
          icon?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          criteria?: Json
          description?: string
          icon?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      adhd_tasks: {
        Row: {
          body_focus: boolean | null
          brain_focus: boolean | null
          created_at: string
          description: string
          difficulty_level: number | null
          estimated_time: number | null
          id: string
          interest_level: number | null
          is_complete: boolean
          user_id: string
        }
        Insert: {
          body_focus?: boolean | null
          brain_focus?: boolean | null
          created_at?: string
          description: string
          difficulty_level?: number | null
          estimated_time?: number | null
          id?: string
          interest_level?: number | null
          is_complete?: boolean
          user_id: string
        }
        Update: {
          body_focus?: boolean | null
          brain_focus?: boolean | null
          created_at?: string
          description?: string
          difficulty_level?: number | null
          estimated_time?: number | null
          id?: string
          interest_level?: number | null
          is_complete?: boolean
          user_id?: string
        }
        Relationships: []
      }
      affiliate_interactions: {
        Row: {
          affiliate_link: string | null
          created_at: string | null
          id: string
          interaction_type: string
          product_id: string
          user_id: string
        }
        Insert: {
          affiliate_link?: string | null
          created_at?: string | null
          id?: string
          interaction_type: string
          product_id: string
          user_id: string
        }
        Update: {
          affiliate_link?: string | null
          created_at?: string | null
          id?: string
          interaction_type?: string
          product_id?: string
          user_id?: string
        }
        Relationships: []
      }
      availability_slots: {
        Row: {
          created_at: string | null
          day_of_week: string
          end_time: string
          id: string
          profile_id: string
          profile_type: string
          recurring: boolean | null
          start_time: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          day_of_week: string
          end_time: string
          id?: string
          profile_id: string
          profile_type: string
          recurring?: boolean | null
          start_time: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          day_of_week?: string
          end_time?: string
          id?: string
          profile_id?: string
          profile_type?: string
          recurring?: boolean | null
          start_time?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      background_checks: {
        Row: {
          check_type: string
          created_at: string | null
          id: string
          provider: string | null
          results: Json | null
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          check_type: string
          created_at?: string | null
          id?: string
          provider?: string | null
          results?: Json | null
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          check_type?: string
          created_at?: string | null
          id?: string
          provider?: string | null
          results?: Json | null
          status?: string
          updated_at?: string | null
          user_id?: string
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
      bookings: {
        Row: {
          client_email: string
          client_name: string
          created_at: string | null
          id: string
          status: string | null
          therapist_availability_id: string | null
        }
        Insert: {
          client_email: string
          client_name: string
          created_at?: string | null
          id?: string
          status?: string | null
          therapist_availability_id?: string | null
        }
        Update: {
          client_email?: string
          client_name?: string
          created_at?: string | null
          id?: string
          status?: string | null
          therapist_availability_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_therapist_availability_id_fkey"
            columns: ["therapist_availability_id"]
            isOneToOne: false
            referencedRelation: "therapist_availability"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_therapist_availability"
            columns: ["therapist_availability_id"]
            isOneToOne: false
            referencedRelation: "therapist_availability"
            referencedColumns: ["id"]
          },
        ]
      }
      breathing_sessions: {
        Row: {
          completed_rounds: number
          created_at: string | null
          duration_seconds: number
          id: string
          technique_id: string
          technique_name: string
          user_id: string
        }
        Insert: {
          completed_rounds: number
          created_at?: string | null
          duration_seconds: number
          id?: string
          technique_id: string
          technique_name: string
          user_id: string
        }
        Update: {
          completed_rounds?: number
          created_at?: string | null
          duration_seconds?: number
          id?: string
          technique_id?: string
          technique_name?: string
          user_id?: string
        }
        Relationships: []
      }
      care_analytics: {
        Row: {
          created_at: string | null
          group_id: string
          id: string
          metric_value: Json
          recorded_at: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          group_id: string
          id?: string
          metric_value: Json
          recorded_at?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string
          id?: string
          metric_value?: Json
          recorded_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_circle_invites: {
        Row: {
          created_at: string | null
          email: string
          group_id: string
          id: string
          role: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          group_id: string
          id?: string
          role: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          group_id?: string
          id?: string
          role?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_connections: {
        Row: {
          connection_type: string
          created_at: string | null
          id: string
          recipient_id: string
          requester_id: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          connection_type: string
          created_at?: string | null
          id?: string
          recipient_id: string
          requester_id: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          connection_type?: string
          created_at?: string | null
          id?: string
          recipient_id?: string
          requester_id?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_facilities: {
        Row: {
          address: string
          amenities: string[] | null
          availability: boolean | null
          created_at: string | null
          description: string
          email: string | null
          facility_type: string
          id: string
          insurance_accepted: string[] | null
          listing_type: string | null
          location: string
          name: string
          phone: string | null
          price_range: string | null
          rating: number | null
          reviews_count: number | null
          services: string[] | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          address: string
          amenities?: string[] | null
          availability?: boolean | null
          created_at?: string | null
          description: string
          email?: string | null
          facility_type: string
          id?: string
          insurance_accepted?: string[] | null
          listing_type?: string | null
          location: string
          name: string
          phone?: string | null
          price_range?: string | null
          rating?: number | null
          reviews_count?: number | null
          services?: string[] | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          address?: string
          amenities?: string[] | null
          availability?: boolean | null
          created_at?: string | null
          description?: string
          email?: string | null
          facility_type?: string
          id?: string
          insurance_accepted?: string[] | null
          listing_type?: string | null
          location?: string
          name?: string
          phone?: string | null
          price_range?: string | null
          rating?: number | null
          reviews_count?: number | null
          services?: string[] | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      care_group_members: {
        Row: {
          created_at: string | null
          group_id: string
          id: string
          member_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          group_id: string
          id?: string
          member_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          group_id?: string
          id?: string
          member_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      care_groups: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          privacy_settings: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          privacy_settings?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          privacy_settings?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_notes: {
        Row: {
          attachments: Json | null
          author_id: string
          category: string
          content: string
          created_at: string | null
          id: string
          tags: string[] | null
          team_id: string
          updated_at: string | null
          visibility: string | null
        }
        Insert: {
          attachments?: Json | null
          author_id: string
          category: string
          content: string
          created_at?: string | null
          id?: string
          tags?: string[] | null
          team_id: string
          updated_at?: string | null
          visibility?: string | null
        }
        Update: {
          attachments?: Json | null
          author_id?: string
          category?: string
          content?: string
          created_at?: string | null
          id?: string
          tags?: string[] | null
          team_id?: string
          updated_at?: string | null
          visibility?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "care_notes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "care_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      care_outcome_metrics: {
        Row: {
          created_at: string | null
          id: string
          metric_type: string
          recorded_at: string | null
          updated_at: string | null
          user_id: string
          value: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          metric_type: string
          recorded_at?: string | null
          updated_at?: string | null
          user_id: string
          value: number
        }
        Update: {
          created_at?: string | null
          id?: string
          metric_type?: string
          recorded_at?: string | null
          updated_at?: string | null
          user_id?: string
          value?: number
        }
        Relationships: []
      }
      care_products: {
        Row: {
          affiliate_link: string | null
          category: string
          created_at: string | null
          description: string
          features: string[] | null
          id: string
          image_url: string | null
          name: string
          price: number
          rating: number | null
          reviews_count: number | null
          updated_at: string | null
        }
        Insert: {
          affiliate_link?: string | null
          category: string
          created_at?: string | null
          description: string
          features?: string[] | null
          id?: string
          image_url?: string | null
          name: string
          price: number
          rating?: number | null
          reviews_count?: number | null
          updated_at?: string | null
        }
        Update: {
          affiliate_link?: string | null
          category?: string
          created_at?: string | null
          description?: string
          features?: string[] | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          rating?: number | null
          reviews_count?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_quality_metrics: {
        Row: {
          created_at: string | null
          group_id: string
          id: string
          metric_value: number
          recorded_at: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          group_id: string
          id?: string
          metric_value: number
          recorded_at?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string
          id?: string
          metric_value?: number
          recorded_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_recipients: {
        Row: {
          care_needs: Json | null
          created_at: string | null
          date_of_birth: string | null
          first_name: string
          gender: string | null
          group_id: string
          id: string
          last_name: string
          medical_history: Json | null
          preferences: Json | null
          updated_at: string | null
        }
        Insert: {
          care_needs?: Json | null
          created_at?: string | null
          date_of_birth?: string | null
          first_name: string
          gender?: string | null
          group_id: string
          id?: string
          last_name: string
          medical_history?: Json | null
          preferences?: Json | null
          updated_at?: string | null
        }
        Update: {
          care_needs?: Json | null
          created_at?: string | null
          date_of_birth?: string | null
          first_name?: string
          gender?: string | null
          group_id?: string
          id?: string
          last_name?: string
          medical_history?: Json | null
          preferences?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_reviews: {
        Row: {
          caregiver_id: string
          comment: string | null
          created_at: string | null
          id: string
          rating: number
          reviewer_id: string
          updated_at: string | null
        }
        Insert: {
          caregiver_id: string
          comment?: string | null
          created_at?: string | null
          id?: string
          rating: number
          reviewer_id: string
          updated_at?: string | null
        }
        Update: {
          caregiver_id?: string
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number
          reviewer_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      care_routines: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          tasks: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          tasks?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          tasks?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      care_tasks: {
        Row: {
          assigned_to: string | null
          category: string
          completed_at: string | null
          completed_by: string | null
          completion_notes: string | null
          created_at: string | null
          created_by: string
          description: string | null
          due_date: string | null
          id: string
          priority: string
          recurrence_pattern: Json | null
          recurring: boolean | null
          status: string | null
          team_id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          category: string
          completed_at?: string | null
          completed_by?: string | null
          completion_notes?: string | null
          created_at?: string | null
          created_by: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority: string
          recurrence_pattern?: Json | null
          recurring?: boolean | null
          status?: string | null
          team_id: string
          title: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          category?: string
          completed_at?: string | null
          completed_by?: string | null
          completion_notes?: string | null
          created_at?: string | null
          created_by?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          recurrence_pattern?: Json | null
          recurring?: boolean | null
          status?: string | null
          team_id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "care_tasks_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "care_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      care_team_availability: {
        Row: {
          available_days: string[]
          available_hours: Json
          created_at: string | null
          group_id: string
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          available_days: string[]
          available_hours: Json
          created_at?: string | null
          group_id: string
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          available_days?: string[]
          available_hours?: Json
          created_at?: string | null
          group_id?: string
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      care_team_members: {
        Row: {
          created_at: string | null
          id: string
          joined_at: string | null
          permissions: Json | null
          role: string
          status: string | null
          team_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          joined_at?: string | null
          permissions?: Json | null
          role: string
          status?: string | null
          team_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          joined_at?: string | null
          permissions?: Json | null
          role?: string
          status?: string | null
          team_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "care_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      care_teams: {
        Row: {
          created_at: string | null
          created_by: string
          description: string | null
          id: string
          name: string
          primary_caregiver: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          description?: string | null
          id?: string
          name: string
          primary_caregiver?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          primary_caregiver?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      care_updates: {
        Row: {
          content: string
          created_at: string | null
          group_id: string
          id: string
          update_type: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          group_id: string
          id?: string
          update_type: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          group_id?: string
          id?: string
          update_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      caregiver_availability: {
        Row: {
          caregiver_id: string
          created_at: string | null
          day_of_week: string
          end_time: string
          id: string
          start_time: string
          updated_at: string | null
        }
        Insert: {
          caregiver_id: string
          created_at?: string | null
          day_of_week: string
          end_time: string
          id?: string
          start_time: string
          updated_at?: string | null
        }
        Update: {
          caregiver_id?: string
          created_at?: string | null
          day_of_week?: string
          end_time?: string
          id?: string
          start_time?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      caregiver_bookings: {
        Row: {
          caregiver_id: string
          created_at: string | null
          end_time: string
          id: string
          notes: string | null
          rate: number
          start_time: string
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          caregiver_id: string
          created_at?: string | null
          end_time: string
          id?: string
          notes?: string | null
          rate: number
          start_time: string
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          caregiver_id?: string
          created_at?: string | null
          end_time?: string
          id?: string
          notes?: string | null
          rate?: number
          start_time?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      caregiver_profiles: {
        Row: {
          availability: string[] | null
          bio: string | null
          certifications: string[] | null
          created_at: string | null
          experience_years: number | null
          first_name: string
          hourly_rate: number
          id: string
          last_name: string
          latitude: number | null
          location: string | null
          longitude: number | null
          rating: number | null
          reviews_count: number | null
          specialties: string[] | null
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          availability?: string[] | null
          bio?: string | null
          certifications?: string[] | null
          created_at?: string | null
          experience_years?: number | null
          first_name: string
          hourly_rate: number
          id: string
          last_name: string
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          rating?: number | null
          reviews_count?: number | null
          specialties?: string[] | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          availability?: string[] | null
          bio?: string | null
          certifications?: string[] | null
          created_at?: string | null
          experience_years?: number | null
          first_name?: string
          hourly_rate?: number
          id?: string
          last_name?: string
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          rating?: number | null
          reviews_count?: number | null
          specialties?: string[] | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: []
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
      community_posts: {
        Row: {
          comments: number | null
          content: string
          created_at: string | null
          id: string
          likes: number | null
          tags: string[] | null
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
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      companion_activity_templates: {
        Row: {
          benefits: string[] | null
          category: string
          created_at: string | null
          description: string
          difficulty: string
          duration: number
          id: string
          materials_needed: string[] | null
          steps: Json
          suitable_for: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          benefits?: string[] | null
          category: string
          created_at?: string | null
          description: string
          difficulty: string
          duration: number
          id?: string
          materials_needed?: string[] | null
          steps: Json
          suitable_for?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          benefits?: string[] | null
          category?: string
          created_at?: string | null
          description?: string
          difficulty?: string
          duration?: number
          id?: string
          materials_needed?: string[] | null
          steps?: Json
          suitable_for?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      companion_profiles: {
        Row: {
          art_therapy_certified: boolean | null
          availability: Json | null
          background_check_date: string | null
          bio: string | null
          child_engagement_activities: Json | null
          cognitive_engagement_activities: Json | null
          communication_preferences: string[] | null
          created_at: string | null
          cultural_competencies: string[] | null
          dementia_experience: boolean | null
          expertise_areas: string[] | null
          hourly_rate: number
          id: string
          identity_verified: boolean | null
          in_person_meeting_preference: boolean | null
          interests: string[] | null
          languages: string[] | null
          mental_health_specialties: string[] | null
          music_therapy_certified: boolean | null
          rating: number | null
          support_tools_proficiency: Json | null
          updated_at: string | null
          user_id: string
          virtual_meeting_preference: boolean | null
          virtual_meeting_tools: string[] | null
        }
        Insert: {
          art_therapy_certified?: boolean | null
          availability?: Json | null
          background_check_date?: string | null
          bio?: string | null
          child_engagement_activities?: Json | null
          cognitive_engagement_activities?: Json | null
          communication_preferences?: string[] | null
          created_at?: string | null
          cultural_competencies?: string[] | null
          dementia_experience?: boolean | null
          expertise_areas?: string[] | null
          hourly_rate: number
          id?: string
          identity_verified?: boolean | null
          in_person_meeting_preference?: boolean | null
          interests?: string[] | null
          languages?: string[] | null
          mental_health_specialties?: string[] | null
          music_therapy_certified?: boolean | null
          rating?: number | null
          support_tools_proficiency?: Json | null
          updated_at?: string | null
          user_id: string
          virtual_meeting_preference?: boolean | null
          virtual_meeting_tools?: string[] | null
        }
        Update: {
          art_therapy_certified?: boolean | null
          availability?: Json | null
          background_check_date?: string | null
          bio?: string | null
          child_engagement_activities?: Json | null
          cognitive_engagement_activities?: Json | null
          communication_preferences?: string[] | null
          created_at?: string | null
          cultural_competencies?: string[] | null
          dementia_experience?: boolean | null
          expertise_areas?: string[] | null
          hourly_rate?: number
          id?: string
          identity_verified?: boolean | null
          in_person_meeting_preference?: boolean | null
          interests?: string[] | null
          languages?: string[] | null
          mental_health_specialties?: string[] | null
          music_therapy_certified?: boolean | null
          rating?: number | null
          support_tools_proficiency?: Json | null
          updated_at?: string | null
          user_id?: string
          virtual_meeting_preference?: boolean | null
          virtual_meeting_tools?: string[] | null
        }
        Relationships: []
      }
      craving_logs: {
        Row: {
          coping_mechanism: string | null
          created_at: string | null
          id: string
          intensity: number
          timestamp: string
          trigger: string | null
          user_id: string | null
        }
        Insert: {
          coping_mechanism?: string | null
          created_at?: string | null
          id?: string
          intensity: number
          timestamp?: string
          trigger?: string | null
          user_id?: string | null
        }
        Update: {
          coping_mechanism?: string | null
          created_at?: string | null
          id?: string
          intensity?: number
          timestamp?: string
          trigger?: string | null
          user_id?: string | null
        }
        Relationships: []
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
      daily_check_ins: {
        Row: {
          created_at: string | null
          date: string
          emotion_tags: string[] | null
          energy_level: number | null
          factors: string[] | null
          focus_level: number | null
          id: string
          mood: number | null
          notes: string | null
          sleep_hours: number | null
          stress_level: number | null
          updated_at: string | null
          used_nicotine: boolean | null
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
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          stress_level?: number | null
          updated_at?: string | null
          used_nicotine?: boolean | null
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
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          stress_level?: number | null
          updated_at?: string | null
          used_nicotine?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      danger_zone_types: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      dementia_profiles: {
        Row: {
          care_needs: string[] | null
          created_at: string | null
          id: string
          stage: string
          symptoms: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          care_needs?: string[] | null
          created_at?: string | null
          id?: string
          stage: string
          symptoms?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          care_needs?: string[] | null
          created_at?: string | null
          id?: string
          stage?: string
          symptoms?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
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
      facility_leads: {
        Row: {
          created_at: string | null
          facility_id: string
          id: string
          notes: string | null
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          facility_id: string
          id?: string
          notes?: string | null
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          facility_id?: string
          id?: string
          notes?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      food_logs: {
        Row: {
          barcode: string | null
          calories: number
          carbs_g: number
          created_at: string
          fat_g: number
          fiber_g: number | null
          food_name: string
          id: string
          image_url: string | null
          log_date: string
          meal_type: string
          notes: string | null
          protein_g: number
          serving_size: number
          serving_unit: string
          user_id: string
        }
        Insert: {
          barcode?: string | null
          calories: number
          carbs_g: number
          created_at?: string
          fat_g: number
          fiber_g?: number | null
          food_name: string
          id?: string
          image_url?: string | null
          log_date: string
          meal_type: string
          notes?: string | null
          protein_g: number
          serving_size: number
          serving_unit: string
          user_id: string
        }
        Update: {
          barcode?: string | null
          calories?: number
          carbs_g?: number
          created_at?: string
          fat_g?: number
          fiber_g?: number | null
          food_name?: string
          id?: string
          image_url?: string | null
          log_date?: string
          meal_type?: string
          notes?: string | null
          protein_g?: number
          serving_size?: number
          serving_unit?: string
          user_id?: string
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
      geofences: {
        Row: {
          center_lat: number
          center_lng: number
          created_at: string | null
          group_id: string
          id: string
          name: string
          radius: number
          type: string
          updated_at: string | null
        }
        Insert: {
          center_lat: number
          center_lng: number
          created_at?: string | null
          group_id: string
          id?: string
          name: string
          radius: number
          type: string
          updated_at?: string | null
        }
        Update: {
          center_lat?: number
          center_lng?: number
          created_at?: string | null
          group_id?: string
          id?: string
          name?: string
          radius?: number
          type?: string
          updated_at?: string | null
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
      goals: {
        Row: {
          created_at: string | null
          daily_step_goal: number | null
          estimated_daily_cost: number | null
          estimated_daily_units: number | null
          goal_type: string
          id: string
          is_active: boolean | null
          method: string
          motivation: string | null
          product_type: string
          quit_date: string | null
          reduction_percent: number | null
          timeline_days: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          daily_step_goal?: number | null
          estimated_daily_cost?: number | null
          estimated_daily_units?: number | null
          goal_type: string
          id?: string
          is_active?: boolean | null
          method: string
          motivation?: string | null
          product_type: string
          quit_date?: string | null
          reduction_percent?: number | null
          timeline_days?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          daily_step_goal?: number | null
          estimated_daily_cost?: number | null
          estimated_daily_units?: number | null
          goal_type?: string
          id?: string
          is_active?: boolean | null
          method?: string
          motivation?: string | null
          product_type?: string
          quit_date?: string | null
          reduction_percent?: number | null
          timeline_days?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      group_posts: {
        Row: {
          content: string
          created_at: string | null
          created_by: string | null
          group_id: string
          id: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          created_by?: string | null
          group_id: string
          id?: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          created_by?: string | null
          group_id?: string
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      insurance_analytics: {
        Row: {
          created_at: string | null
          id: string
          type: string
          updated_at: string | null
          user_id: string
          value: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          type: string
          updated_at?: string | null
          user_id: string
          value: number
        }
        Update: {
          created_at?: string | null
          id?: string
          type?: string
          updated_at?: string | null
          user_id?: string
          value?: number
        }
        Relationships: []
      }
      insurance_claims: {
        Row: {
          claim_amount: number
          created_at: string | null
          id: string
          insurance_id: string
          processing_notes: string | null
          service_date: string
          service_type: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          claim_amount: number
          created_at?: string | null
          id?: string
          insurance_id: string
          processing_notes?: string | null
          service_date: string
          service_type: string
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          claim_amount?: number
          created_at?: string | null
          id?: string
          insurance_id?: string
          processing_notes?: string | null
          service_date?: string
          service_type?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      insurance_deductibles: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          insurance_id: string
          remaining: number
          type: string
          updated_at: string | null
          user_id: string
          year: number
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          insurance_id: string
          remaining: number
          type: string
          updated_at?: string | null
          user_id: string
          year: number
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          insurance_id?: string
          remaining?: number
          type?: string
          updated_at?: string | null
          user_id?: string
          year?: number
        }
        Relationships: []
      }
      insurance_documents: {
        Row: {
          created_at: string | null
          document_type: string
          file_url: string
          id: string
          insurance_id: string
          metadata: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          document_type: string
          file_url: string
          id?: string
          insurance_id: string
          metadata?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          document_type?: string
          file_url?: string
          id?: string
          insurance_id?: string
          metadata?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      insurance_notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          metadata: Json | null
          read: boolean | null
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          metadata?: Json | null
          read?: boolean | null
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          metadata?: Json | null
          read?: boolean | null
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      insurance_plan_benefits: {
        Row: {
          coverage_percentage: number
          created_at: string | null
          deductible_applies: boolean | null
          id: string
          max_benefit: number | null
          notes: string | null
          plan_id: string
          service_category: string
          updated_at: string | null
        }
        Insert: {
          coverage_percentage: number
          created_at?: string | null
          deductible_applies?: boolean | null
          id?: string
          max_benefit?: number | null
          notes?: string | null
          plan_id: string
          service_category: string
          updated_at?: string | null
        }
        Update: {
          coverage_percentage?: number
          created_at?: string | null
          deductible_applies?: boolean | null
          id?: string
          max_benefit?: number | null
          notes?: string | null
          plan_id?: string
          service_category?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      insurance_plans: {
        Row: {
          coverage_details: Json
          created_at: string | null
          id: string
          name: string
          provider: string
          type: string
          updated_at: string | null
        }
        Insert: {
          coverage_details?: Json
          created_at?: string | null
          id?: string
          name: string
          provider: string
          type: string
          updated_at?: string | null
        }
        Update: {
          coverage_details?: Json
          created_at?: string | null
          id?: string
          name?: string
          provider?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      logs: {
        Row: {
          amount: number | null
          coping_mechanism: string | null
          craving_intensity: number | null
          created_at: string | null
          energy_level: number | null
          focus_level: number | null
          id: string
          journal_entry: string | null
          mood: number | null
          product_type: string
          sleep_hours: number | null
          sleep_quality: number | null
          timestamp: string
          trigger: string | null
          updated_at: string | null
          used_nicotine: boolean
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          coping_mechanism?: string | null
          craving_intensity?: number | null
          created_at?: string | null
          energy_level?: number | null
          focus_level?: number | null
          id?: string
          journal_entry?: string | null
          mood?: number | null
          product_type: string
          sleep_hours?: number | null
          sleep_quality?: number | null
          timestamp: string
          trigger?: string | null
          updated_at?: string | null
          used_nicotine?: boolean
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          coping_mechanism?: string | null
          craving_intensity?: number | null
          created_at?: string | null
          energy_level?: number | null
          focus_level?: number | null
          id?: string
          journal_entry?: string | null
          mood?: number | null
          product_type?: string
          sleep_hours?: number | null
          sleep_quality?: number | null
          timestamp?: string
          trigger?: string | null
          updated_at?: string | null
          used_nicotine?: boolean
          user_id?: string | null
        }
        Relationships: []
      }
      medical_device_data: {
        Row: {
          created_at: string | null
          device_type: string
          id: string
          readings: Json
          recorded_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          device_type: string
          id?: string
          readings: Json
          recorded_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          device_type?: string
          id?: string
          readings?: Json
          recorded_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      medical_documents: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          document_type: string | null
          file_url: string | null
          group_id: string
          id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          document_type?: string | null
          file_url?: string | null
          group_id: string
          id?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          document_type?: string | null
          file_url?: string | null
          group_id?: string
          id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      medication_adherence_trends: {
        Row: {
          adherence_rate: number | null
          created_at: string | null
          date: string
          group_id: string
          id: string
          missed_doses: number | null
          total_doses: number | null
        }
        Insert: {
          adherence_rate?: number | null
          created_at?: string | null
          date: string
          group_id: string
          id?: string
          missed_doses?: number | null
          total_doses?: number | null
        }
        Update: {
          adherence_rate?: number | null
          created_at?: string | null
          date?: string
          group_id?: string
          id?: string
          missed_doses?: number | null
          total_doses?: number | null
        }
        Relationships: []
      }
      medication_portal_settings: {
        Row: {
          accessibility_settings: Json | null
          created_at: string | null
          group_id: string
          id: string
          reminder_preferences: Json | null
          updated_at: string | null
        }
        Insert: {
          accessibility_settings?: Json | null
          created_at?: string | null
          group_id: string
          id?: string
          reminder_preferences?: Json | null
          updated_at?: string | null
        }
        Update: {
          accessibility_settings?: Json | null
          created_at?: string | null
          group_id?: string
          id?: string
          reminder_preferences?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      medication_schedules: {
        Row: {
          created_at: string | null
          dosage: string | null
          frequency: string
          group_id: string
          id: string
          medication_name: string
          time_of_day: string[]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          dosage?: string | null
          frequency: string
          group_id: string
          id?: string
          medication_name: string
          time_of_day: string[]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          dosage?: string | null
          frequency?: string
          group_id?: string
          id?: string
          medication_name?: string
          time_of_day?: string[]
          updated_at?: string | null
        }
        Relationships: []
      }
      medication_supervision_summary: {
        Row: {
          approved_medications: number | null
          avg_verification_time_minutes: number | null
          created_at: string | null
          group_id: string
          id: string
          missed_medications: number | null
          pending_verifications: number | null
          supervisor_id: string | null
          total_medications: number | null
          updated_at: string | null
        }
        Insert: {
          approved_medications?: number | null
          avg_verification_time_minutes?: number | null
          created_at?: string | null
          group_id: string
          id?: string
          missed_medications?: number | null
          pending_verifications?: number | null
          supervisor_id?: string | null
          total_medications?: number | null
          updated_at?: string | null
        }
        Update: {
          approved_medications?: number | null
          avg_verification_time_minutes?: number | null
          created_at?: string | null
          group_id?: string
          id?: string
          missed_medications?: number | null
          pending_verifications?: number | null
          supervisor_id?: string | null
          total_medications?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      medication_verifications: {
        Row: {
          created_at: string | null
          group_id: string
          id: string
          photo_url: string | null
          status: string | null
          updated_at: string | null
          verification_time: string | null
        }
        Insert: {
          created_at?: string | null
          group_id: string
          id?: string
          photo_url?: string | null
          status?: string | null
          updated_at?: string | null
          verification_time?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string
          id?: string
          photo_url?: string | null
          status?: string | null
          updated_at?: string | null
          verification_time?: string | null
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
      mood_logs: {
        Row: {
          created_at: string
          energy_level: number | null
          focus_level: number | null
          id: string
          mood_score: number | null
          notes: string | null
          stress_level: number | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          energy_level?: number | null
          focus_level?: number | null
          id?: string
          mood_score?: number | null
          notes?: string | null
          stress_level?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          energy_level?: number | null
          focus_level?: number | null
          id?: string
          mood_score?: number | null
          notes?: string | null
          stress_level?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
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
      nicotine_logs: {
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
          product_type?: string | null
          quantity?: number | null
          sleep_hours?: number
          sleep_quality?: number
          used_nicotine?: boolean
          user_id?: string
        }
        Relationships: []
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
          created_at: string | null
          id: string
          message: string
          metadata: Json | null
          read: boolean | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          metadata?: Json | null
          read?: boolean | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          metadata?: Json | null
          read?: boolean | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      patient_check_ins: {
        Row: {
          caregiver_notes: string | null
          check_in_type: string
          completed_time: string | null
          created_at: string | null
          group_id: string
          id: string
          medication_taken: boolean | null
          mood_score: number | null
          nutrition_log: Json | null
          pain_level: number | null
          photo_verification_url: string | null
          response_data: Json | null
          scheduled_time: string | null
          sleep_hours: number | null
          social_interactions: string[] | null
          status: string | null
          updated_at: string | null
          vital_signs: Json | null
        }
        Insert: {
          caregiver_notes?: string | null
          check_in_type: string
          completed_time?: string | null
          created_at?: string | null
          group_id: string
          id?: string
          medication_taken?: boolean | null
          mood_score?: number | null
          nutrition_log?: Json | null
          pain_level?: number | null
          photo_verification_url?: string | null
          response_data?: Json | null
          scheduled_time?: string | null
          sleep_hours?: number | null
          social_interactions?: string[] | null
          status?: string | null
          updated_at?: string | null
          vital_signs?: Json | null
        }
        Update: {
          caregiver_notes?: string | null
          check_in_type?: string
          completed_time?: string | null
          created_at?: string | null
          group_id?: string
          id?: string
          medication_taken?: boolean | null
          mood_score?: number | null
          nutrition_log?: Json | null
          pain_level?: number | null
          photo_verification_url?: string | null
          response_data?: Json | null
          scheduled_time?: string | null
          sleep_hours?: number | null
          social_interactions?: string[] | null
          status?: string | null
          updated_at?: string | null
          vital_signs?: Json | null
        }
        Relationships: []
      }
      patient_info: {
        Row: {
          allergies: string[] | null
          care_preferences: Json | null
          created_at: string | null
          emergency_contacts: Json | null
          id: string
          medical_conditions: string[] | null
          medications: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          allergies?: string[] | null
          care_preferences?: Json | null
          created_at?: string | null
          emergency_contacts?: Json | null
          id?: string
          medical_conditions?: string[] | null
          medications?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          allergies?: string[] | null
          care_preferences?: Json | null
          created_at?: string | null
          emergency_contacts?: Json | null
          id?: string
          medical_conditions?: string[] | null
          medications?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      patient_locations: {
        Row: {
          created_at: string | null
          current_location: Json | null
          group_id: string
          id: string
          location_enabled: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_location?: Json | null
          group_id: string
          id?: string
          location_enabled?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_location?: Json | null
          group_id?: string
          id?: string
          location_enabled?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      post_comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          post_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          post_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          post_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      post_likes: {
        Row: {
          created_at: string | null
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      private_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          read: boolean | null
          recipient_id: string
          sender_id: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          read?: boolean | null
          recipient_id: string
          sender_id: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          read?: boolean | null
          recipient_id?: string
          sender_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          active: boolean | null
          average_rating: number | null
          brand: string | null
          category: string
          created_at: string | null
          description: string | null
          flavor: string | null
          id: string
          image_url: string | null
          name: string
          review_count: number | null
          strength: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          average_rating?: number | null
          brand?: string | null
          category: string
          created_at?: string | null
          description?: string | null
          flavor?: string | null
          id?: string
          image_url?: string | null
          name: string
          review_count?: number | null
          strength?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          average_rating?: number | null
          brand?: string | null
          category?: string
          created_at?: string | null
          description?: string | null
          flavor?: string | null
          id?: string
          image_url?: string | null
          name?: string
          review_count?: number | null
          strength?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      professional_leads: {
        Row: {
          created_at: string
          id: string
          message: string
          therapist_id: string | null
          user_email: string
          user_name: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          therapist_id?: string | null
          user_email: string
          user_name: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          therapist_id?: string | null
          user_email?: string
          user_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "professional_leads_therapist_id_fkey"
            columns: ["therapist_id"]
            isOneToOne: false
            referencedRelation: "therapists"
            referencedColumns: ["id"]
          },
        ]
      }
      professionals: {
        Row: {
          booking_link: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          id: string
          image_url: string | null
          location: string | null
          name: string
          profile_description: string | null
          specialty: string | null
          website_url: string | null
        }
        Insert: {
          booking_link?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          location?: string | null
          name: string
          profile_description?: string | null
          specialty?: string | null
          website_url?: string | null
        }
        Update: {
          booking_link?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          location?: string | null
          name?: string
          profile_description?: string | null
          specialty?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          push_token: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          push_token?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          push_token?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      quotes: {
        Row: {
          author: string
          category: string | null
          created_at: string | null
          id: string
          text: string
        }
        Insert: {
          author: string
          category?: string | null
          created_at?: string | null
          id?: string
          text: string
        }
        Update: {
          author?: string
          category?: string | null
          created_at?: string | null
          id?: string
          text?: string
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
            referencedRelation: "smokeless_products"
            referencedColumns: ["id"]
          },
        ]
      }
      smokeless_products: {
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
        Relationships: [
          {
            foreignKeyName: "smokeless_products_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "smokeless_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      smokeless_vendor_reviews: {
        Row: {
          created_at: string | null
          id: string
          rating: number
          review_text: string | null
          updated_at: string | null
          user_id: string
          vendor_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          rating: number
          review_text?: string | null
          updated_at?: string | null
          user_id: string
          vendor_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          rating?: number
          review_text?: string | null
          updated_at?: string | null
          user_id?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "smokeless_vendor_reviews_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "smokeless_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      smokeless_vendors: {
        Row: {
          address: string
          affiliate_link: string | null
          business_type: Database["public"]["Enums"]["business_type"]
          created_at: string | null
          delivery_available: boolean | null
          delivery_info: Json | null
          description: string
          id: string
          image_url: string | null
          name: string
          phone: string | null
          pickup_available: boolean | null
          review_count: number | null
          updated_at: string | null
          user_rating_avg: number | null
          website: string | null
        }
        Insert: {
          address: string
          affiliate_link?: string | null
          business_type: Database["public"]["Enums"]["business_type"]
          created_at?: string | null
          delivery_available?: boolean | null
          delivery_info?: Json | null
          description: string
          id?: string
          image_url?: string | null
          name: string
          phone?: string | null
          pickup_available?: boolean | null
          review_count?: number | null
          updated_at?: string | null
          user_rating_avg?: number | null
          website?: string | null
        }
        Update: {
          address?: string
          affiliate_link?: string | null
          business_type?: Database["public"]["Enums"]["business_type"]
          created_at?: string | null
          delivery_available?: boolean | null
          delivery_info?: Json | null
          description?: string
          id?: string
          image_url?: string | null
          name?: string
          phone?: string | null
          pickup_available?: boolean | null
          review_count?: number | null
          updated_at?: string | null
          user_rating_avg?: number | null
          website?: string | null
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
      study_collaborators: {
        Row: {
          created_at: string | null
          id: string
          role: string
          study_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: string
          study_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          study_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      study_documents: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          file_type: string | null
          file_url: string | null
          id: string
          size: number | null
          storage_path: string | null
          study_id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          size?: number | null
          storage_path?: string | null
          study_id: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          size?: number | null
          storage_path?: string | null
          study_id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      study_notes: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          last_edited_by: string | null
          study_id: string
          title: string
          updated_at: string | null
          version: number
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          last_edited_by?: string | null
          study_id: string
          title: string
          updated_at?: string | null
          version?: number
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          last_edited_by?: string | null
          study_id?: string
          title?: string
          updated_at?: string | null
          version?: number
        }
        Relationships: []
      }
      study_questions: {
        Row: {
          answer: string | null
          answered_by: string | null
          asked_by: string | null
          created_at: string | null
          id: string
          question: string
          status: string
          study_id: string
        }
        Insert: {
          answer?: string | null
          answered_by?: string | null
          asked_by?: string | null
          created_at?: string | null
          id?: string
          question: string
          status: string
          study_id: string
        }
        Update: {
          answer?: string | null
          answered_by?: string | null
          asked_by?: string | null
          created_at?: string | null
          id?: string
          question?: string
          status?: string
          study_id?: string
        }
        Relationships: []
      }
      study_tasks: {
        Row: {
          assigned_to: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          due_date: string | null
          id: string
          priority: string
          status: string
          study_id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          priority: string
          status: string
          study_id: string
          title: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          status?: string
          study_id?: string
          title?: string
          updated_at?: string | null
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
      tasks: {
        Row: {
          assigned_to: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          due_date: string | null
          group_id: string
          id: string
          priority: string
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          group_id: string
          id?: string
          priority?: string
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          group_id?: string
          id?: string
          priority?: string
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      team_messages: {
        Row: {
          content: string
          created_at: string | null
          group_id: string
          id: string
          sender_id: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          group_id: string
          id?: string
          sender_id: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          group_id?: string
          id?: string
          sender_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      temp_services: {
        Row: {
          category: string
          compatibility: Json | null
          created_at: string
          description: string
          features: Json
          id: string
          is_premium: boolean
          long_description: string | null
          name: string
          rating: number
          review_summary: Json | null
          updated_at: string
          url: string
        }
        Insert: {
          category: string
          compatibility?: Json | null
          created_at?: string
          description: string
          features?: Json
          id?: string
          is_premium?: boolean
          long_description?: string | null
          name: string
          rating?: number
          review_summary?: Json | null
          updated_at?: string
          url: string
        }
        Update: {
          category?: string
          compatibility?: Json | null
          created_at?: string
          description?: string
          features?: Json
          id?: string
          is_premium?: boolean
          long_description?: string | null
          name?: string
          rating?: number
          review_summary?: Json | null
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author: string
          created_at: string
          id: string
          quote: string
          title: string | null
        }
        Insert: {
          author: string
          created_at?: string
          id?: string
          quote: string
          title?: string | null
        }
        Update: {
          author?: string
          created_at?: string
          id?: string
          quote?: string
          title?: string | null
        }
        Relationships: []
      }
      therapist_availability: {
        Row: {
          created_at: string | null
          end_time: string
          id: string
          is_booked: boolean | null
          start_time: string
          therapist_id: string | null
        }
        Insert: {
          created_at?: string | null
          end_time: string
          id?: string
          is_booked?: boolean | null
          start_time: string
          therapist_id?: string | null
        }
        Update: {
          created_at?: string | null
          end_time?: string
          id?: string
          is_booked?: boolean | null
          start_time?: string
          therapist_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "therapist_availability_therapist_id_fkey"
            columns: ["therapist_id"]
            isOneToOne: false
            referencedRelation: "therapists"
            referencedColumns: ["id"]
          },
        ]
      }
      therapists: {
        Row: {
          accepted_insurance: string[] | null
          accepting_new_clients: boolean | null
          created_at: string
          id: string
          is_verified: boolean | null
          location: string | null
          name: string
          profile_picture_url: string | null
          specialties: string[] | null
          updated_at: string
        }
        Insert: {
          accepted_insurance?: string[] | null
          accepting_new_clients?: boolean | null
          created_at?: string
          id?: string
          is_verified?: boolean | null
          location?: string | null
          name: string
          profile_picture_url?: string | null
          specialties?: string[] | null
          updated_at?: string
        }
        Update: {
          accepted_insurance?: string[] | null
          accepting_new_clients?: boolean | null
          created_at?: string
          id?: string
          is_verified?: boolean | null
          location?: string | null
          name?: string
          profile_picture_url?: string | null
          specialties?: string[] | null
          updated_at?: string
        }
        Relationships: []
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
      user_goals: {
        Row: {
          cost_per_unit: number | null
          created_at: string
          daily_step_goal: number | null
          goal_type: string
          id: string
          method: string
          motivation: string | null
          product_type: string
          quit_date: string | null
          reduction_percent: number | null
          status: string
          timeline_days: number | null
          title: string | null
          typical_daily_usage: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cost_per_unit?: number | null
          created_at?: string
          daily_step_goal?: number | null
          goal_type: string
          id?: string
          method: string
          motivation?: string | null
          product_type: string
          quit_date?: string | null
          reduction_percent?: number | null
          status?: string
          timeline_days?: number | null
          title?: string | null
          typical_daily_usage?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cost_per_unit?: number | null
          created_at?: string
          daily_step_goal?: number | null
          goal_type?: string
          id?: string
          method?: string
          motivation?: string | null
          product_type?: string
          quit_date?: string | null
          reduction_percent?: number | null
          status?: string
          timeline_days?: number | null
          title?: string | null
          typical_daily_usage?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_insurance: {
        Row: {
          coverage_end_date: string | null
          coverage_start_date: string
          created_at: string | null
          group_number: string | null
          id: string
          insurance_plan_id: string
          policy_number: string
          updated_at: string | null
          user_id: string
          verification_status: string | null
        }
        Insert: {
          coverage_end_date?: string | null
          coverage_start_date: string
          created_at?: string | null
          group_number?: string | null
          id?: string
          insurance_plan_id: string
          policy_number: string
          updated_at?: string | null
          user_id: string
          verification_status?: string | null
        }
        Update: {
          coverage_end_date?: string | null
          coverage_start_date?: string
          created_at?: string | null
          group_number?: string | null
          id?: string
          insurance_plan_id?: string
          policy_number?: string
          updated_at?: string | null
          user_id?: string
          verification_status?: string | null
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
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
          share_activity: boolean | null
          show_online_status: boolean | null
          show_profile: boolean | null
          theme: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
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
          share_activity?: boolean | null
          show_online_status?: boolean | null
          show_profile?: boolean | null
          theme?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
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
          share_activity?: boolean | null
          show_online_status?: boolean | null
          show_profile?: boolean | null
          theme?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          role: string
          user_id: string
        }
        Update: {
          created_at?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      user_settings: {
        Row: {
          created_at: string
          notifications_enabled: boolean | null
          theme: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          notifications_enabled?: boolean | null
          theme?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          notifications_enabled?: boolean | null
          theme?: string | null
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
          priority: string
          project_id: string | null
          status: string
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
          priority?: string
          project_id?: string | null
          status?: string
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
          priority?: string
          project_id?: string | null
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      vendor_profiles: {
        Row: {
          business_license: string | null
          business_name: string
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          created_at: string | null
          created_by: string
          id: string
          tax_id: string | null
          updated_at: string | null
        }
        Insert: {
          business_license?: string | null
          business_name: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string | null
          created_by: string
          id?: string
          tax_id?: string | null
          updated_at?: string | null
        }
        Update: {
          business_license?: string | null
          business_name?: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string | null
          created_by?: string
          id?: string
          tax_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      vendor_reviews: {
        Row: {
          created_at: string
          id: string
          is_moderated: boolean
          rating: number
          review_text: string | null
          user_id: string
          vendor_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_moderated?: boolean
          rating: number
          review_text?: string | null
          user_id: string
          vendor_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_moderated?: boolean
          rating?: number
          review_text?: string | null
          user_id?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_reviews_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "smokeless_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendors: {
        Row: {
          active: boolean | null
          affiliate_url: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          active?: boolean | null
          affiliate_url?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          active?: boolean | null
          affiliate_url?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      verification_requests: {
        Row: {
          created_at: string | null
          documents: Json
          id: string
          request_type: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          documents?: Json
          id?: string
          request_type: string
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          documents?: Json
          id?: string
          request_type?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      video_consultations: {
        Row: {
          created_at: string | null
          duration: number
          host_id: string
          id: string
          meeting_url: string | null
          participants: Json
          scheduled_time: string
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          duration: number
          host_id: string
          id?: string
          meeting_url?: string | null
          participants: Json
          scheduled_time: string
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          duration?: number
          host_id?: string
          id?: string
          meeting_url?: string | null
          participants?: Json
          scheduled_time?: string
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
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
      wellness_products: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          price: number | null
          product_url: string | null
          rating: number | null
          vendor_id: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          price?: number | null
          product_url?: string | null
          rating?: number | null
          vendor_id?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number | null
          product_url?: string | null
          rating?: number | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wellness_products_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
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
      daily_nicotine_use: {
        Row: {
          date: string | null
          product_type: string | null
          total_quantity: number | null
          user_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_random_quote: {
        Args: Record<PropertyKey, never>
        Returns: {
          author: string | null
          created_at: string
          id: string
          quote: string
        }[]
      }
      get_user_streak: {
        Args: { user_id: string }
        Returns: number
      }
      increment_version: {
        Args: { row_id: string }
        Returns: number
      }
      moderate_review: {
        Args: { p_review_id: string; p_status: string; p_notes?: string }
        Returns: undefined
      }
    }
    Enums: {
      business_type: "retail" | "online" | "hybrid"
      moderation_status: "pending" | "approved" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
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
      business_type: ["retail", "online", "hybrid"],
      moderation_status: ["pending", "approved", "rejected"],
    },
  },
} as const
