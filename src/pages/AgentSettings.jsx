import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Grid,
  Button,
  useToast,
  Flex,
  Spinner,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { getAgentDetails, updateAgentDetails } from "../backend-functions/agents-api";

function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    role: "",
    nin: "",
    agent_id: "",
    commission: "",
    rating: "",
    status: "",
    is_active: true,
    address: "",
    lga: "",
    state: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await getAgentDetails();
        console.log("API Response:", response);
        
        if (!response?.user_id) {
          throw new Error("Invalid user data received");
        }

        setFormData({
          first_name: response.user_id.first_name || "",
          last_name: response.user_id.last_name || "",
          email: response.user_id.email || "",
          phone: response.user_id.phone || "",
          role: response.user_id.role || "",
          nin: response.user_id.nin || "",
          agent_id: response.agent_id || "",
          commission: response.commission || "0",
          rating: response.rating || "0",
          status: response.status || "",
          is_active: response.is_active ?? true,
          address: response.address || "",
          lga: response.lga || "",
          state: response.state || "",
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
        toast({
          title: "Error fetching profile",
          description: error.message || "Failed to load profile data",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [toast]);

  const handleEditClick = async () => {
    if (isEditing) {
      try {
        const updateData = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          lga: formData.lga,
          state: formData.state,
        };

        await updateAgentDetails(updateData);
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setIsEditing(false);
      } catch (error) {
        toast({
          title: "Error updating profile",
          description: error.message || "Failed to update profile",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleInputChange = (e) => {
    if (!isEditing) return;
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) {
    return (
      <Box p={4} display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Spinner size="xl" color="green.500" />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading as="h1" size="lg" mb={2}>
            Agent Profile
          </Heading>
          <Flex gap={2} align="center">
            <Badge colorScheme={formData.status === 'active' ? 'green' : 'red'}>
              {formData.status}
            </Badge>
            <Badge colorScheme={formData.is_active ? 'green' : 'red'}>
              {formData.is_active ? 'Active' : 'Inactive'}
            </Badge>
            <Text color="gray.500">Agent ID: {formData.agent_id}</Text>
          </Flex>
        </Box>
        <Button 
          onClick={handleEditClick}
          colorScheme={isEditing ? "green" : "blue"}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </Flex>

      <Box mb={8}>
        <Heading size="md" mb={4}>Personal Information</Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          <Box>
            <Text mb={2}>First Name</Text>
            <Input
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Box>
          <Box>
            <Text mb={2}>Last Name</Text>
            <Input
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Box>
          <Box>
            <Text mb={2}>Email</Text>
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              type="email"
            />
          </Box>
          <Box>
            <Text mb={2}>Phone</Text>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Box>
          <Box>
            <Text mb={2}>NIN</Text>
            <Input
              name="nin"
              value={formData.nin}
              onChange={handleInputChange}
              disabled={true}
            />
          </Box>
          <Box>
            <Text mb={2}>Role</Text>
            <Input
              name="role"
              value={formData.role}
              disabled={true}
            />
          </Box>
        </Grid>
      </Box>

      <Divider my={8} />

      <Box mb={8}>
        <Heading size="md" mb={4}>Business Information</Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          <Box>
            <Text mb={2}>Commission Rate</Text>
            <Input
              name="commission"
              value={formData.commission}
              disabled={true}
              type="number"
              step="0.001"
            />
          </Box>
          <Box>
            <Text mb={2}>Rating</Text>
            <Input
              name="rating"
              value={formData.rating}
              disabled={true}
              type="number"
              step="0.1"
            />
          </Box>
          <Box>
            <Text mb={2}>Address</Text>
            <Input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Box>
          <Box>
            <Text mb={2}>LGA</Text>
            <Input
              name="lga"
              value={formData.lga}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Box>
          <Box>
            <Text mb={2}>State</Text>
            <Input
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default Settings;
