import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, Phone, User, MessageSquare, LogOut } from "lucide-react"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Lead Management | Dr Vrushni Bhuta Fertility Clinic",
  description: "Manage contact form submissions and leads",
  robots: "noindex, nofollow", // Don't index admin pages
}

export default async function LeadsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  // Fetch all contact submissions ordered by most recent
  const { data: submissions, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("submitted_at", { ascending: false })

  if (error) {
    console.error("[v0] Error fetching submissions:", error)
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="border-red-200">
          <CardContent className="p-6">
            <p className="text-red-600">Error loading submissions. Please check database connection.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const statusColors = {
    new: "bg-blue-100 text-blue-800",
    contacted: "bg-yellow-100 text-yellow-800",
    closed: "bg-green-100 text-green-800",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#47145a] mb-2">Lead Management</h1>
            <p className="text-gray-600">Contact form submissions from your website</p>
            <p className="text-sm text-gray-500 mt-1">Logged in as: {user.email}</p>
          </div>
          <form action="/auth/signout" method="post">
            <Button
              variant="outline"
              className="border-[#47145a] text-[#47145a] hover:bg-[#47145a] hover:text-white bg-transparent"
              type="submit"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </form>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Leads</p>
                  <p className="text-3xl font-bold text-[#47145a]">{submissions?.length || 0}</p>
                </div>
                <User className="w-8 h-8 text-[#eb9142]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {submissions?.filter((s) => s.status === "new").length || 0}
                  </p>
                </div>
                <Badge className={statusColors.new}>New</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Contacted</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {submissions?.filter((s) => s.status === "contacted").length || 0}
                  </p>
                </div>
                <Badge className={statusColors.contacted}>Contacted</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Closed</p>
                  <p className="text-3xl font-bold text-green-600">
                    {submissions?.filter((s) => s.status === "closed").length || 0}
                  </p>
                </div>
                <Badge className={statusColors.closed}>Closed</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {submissions && submissions.length > 0 ? (
            submissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#47145a] to-[#eb9142] flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-[#47145a]">{submission.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(submission.submitted_at).toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })}
                        </div>
                      </div>
                    </div>
                    <Badge className={statusColors[submission.status as keyof typeof statusColors]}>
                      {submission.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-4 h-4 text-[#eb9142]" />
                      <a href={`mailto:${submission.email}`} className="hover:text-[#eb9142] transition-colors">
                        {submission.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-[#eb9142]" />
                      <a href={`tel:${submission.phone}`} className="hover:text-[#eb9142] transition-colors">
                        {submission.phone}
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 text-[#47145a] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                    </div>
                  </div>
                  {submission.notes && (
                    <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-yellow-800 mb-1">Notes:</p>
                      <p className="text-sm text-yellow-700">{submission.notes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No submissions yet</p>
                <p className="text-gray-400 text-sm mt-2">Contact form submissions will appear here</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
